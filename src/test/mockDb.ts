import type { Quote } from "../db/schema/quote";

type QuoteRow = Quote;

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export const createMockDb = (initial: QuoteRow[] = []) => {
  let data = clone(initial);
  let lastId = data.reduce((max, { id }) => (id > max ? id : max), 0);

  const reset = (next: QuoteRow[]) => {
    data = clone(next);
    lastId = data.reduce((max, { id }) => (id > max ? id : max), 0);
  };

  const parseNumericId = (id: number | string) => {
    const value = Number(id);
    if (!Number.isFinite(value)) throw new TypeError(`Invalid id: ${id}`);
    return value;
  };

  // --- Select builder (supports both dynamic (await q) and prepared (prepare + execute) ---
  // Extracts { column, value } from Drizzle eq(column, value) expressions.
  // eq() returns an SQL object: queryChunks[1] is the column ref, [3] is the value
  // (wrapped in a Param object when using real PgColumn references).
  const parseCondition = (condition: unknown): { column: string; value: unknown } | null => {
    if (!condition || typeof condition !== "object") return null;
    const c = condition as Record<string, unknown>;
    const chunks = c.queryChunks as Array<Record<string, unknown> | string> | undefined;
    if (!Array.isArray(chunks) || chunks.length < 4) return null;
    const colRef = chunks[1];
    const rawValue = chunks[3];
    if (colRef && typeof colRef === "object" && "name" in colRef) {
      // Drizzle wraps values in a Param { value: ... } when using real PgColumns.
      // Unwrap to get the plain value.
      const value =
        rawValue && typeof rawValue === "object" && "value" in rawValue
          ? (rawValue as { value: unknown }).value
          : rawValue;
      return { column: colRef.name as string, value };
    }
    return null;
  };

  const createSelectQuery = () => {
    const state: {
      limit?: number;
      offset?: number;
      filters: Record<string, unknown>;
    } = { filters: {} };

    const applyWindow = (rows: QuoteRow[]) => {
      const start = state.offset ?? 0;
      const end = state.limit != null ? start + state.limit : undefined;
      return rows.slice(start, end);
    };

    const executeInline = (params: Record<string, unknown> = {}, useFilters: boolean = false) => {
      let rows = clone(data);

      // Prepared-statement params (used by .prepare().execute(params))
      if ("id" in params) {
        const parsedId = parseNumericId(params.id as number | string);
        rows = rows.filter((quote) => quote.id === parsedId);
      }
      if ("author" in params && params.author != null) {
        rows = rows.filter((quote) => quote.author === params.author);
      }

      // Dynamic $dynamic() + .where() filters (used by await q)
      if (useFilters) {
        if (state.filters.author) {
          rows = rows.filter((quote) => quote.author === state.filters.author);
        }
        if (state.filters.id) {
          const parsedId = parseNumericId(state.filters.id as number | string);
          rows = rows.filter((quote) => quote.id === parsedId);
        }
      }

      return applyWindow(rows);
    };

    // Dynamic query builder (supports conditional .where/.limit/.offset + await)
    const dynamicBuilder: Record<string, unknown> = {
      $dynamic: () => dynamicBuilder,
      where: (condition: unknown) => {
        const parsed = parseCondition(condition);
        if (parsed) {
          state.filters[parsed.column] = parsed.value;
        }
        return dynamicBuilder;
      },
      limit: (n: number) => {
        state.limit = n;
        return dynamicBuilder;
      },
      offset: (n: number) => {
        state.offset = n;
        return dynamicBuilder;
      },
      // Prepare for named prepared statements (ignores name, uses execute params)
      prepare: (_name: string) => ({
        execute: (params: Record<string, unknown>) => executeInline(params, false),
      }),
      // Make the dynamic builder thenable so `await q` works
      then: (resolve: (rows: QuoteRow[]) => void) => {
        resolve(executeInline({}, true));
      },
    };

    return dynamicBuilder;
  };

  const select = () => ({
    from: () => createSelectQuery(),
  });

  // --- Insert builder (supports .values().returning()) ---
  const insert = () => ({
    values: (row: QuoteRow) => {
      const doInsert = () => {
        const id = row.id ?? ++lastId;
        const record: QuoteRow = { ...row, id };
        data.push(record);
        lastId = Math.max(lastId, id);
        return [{ id }];
      };

      return {
        returning: () => doInsert(),
      };
    },
  });

  // --- Delete builder (supports .where().prepare(name).execute(params)) ---
  const del = () => ({
    where: () => ({
      prepare: (_name: string) => ({
        execute: async ({ id }: { id: number | string }) => {
          const parsedId = parseNumericId(id);
          const index = data.findIndex((quote) => quote.id === parsedId);
          if (index === -1) return [];
          const [removed] = data.splice(index, 1);
          return [{ deletedId: removed.id }];
        },
      }),
    }),
  });

  // --- Update builder (supports .set().where().prepare(name).execute(params)) ---
  const update = () => ({
    set: (incoming: Partial<QuoteRow>) => ({
      where: () => ({
        prepare: (_name: string) => ({
          execute: async ({ id }: { id: number | string }) => {
            const targetId = parseNumericId(id);
            const { id: _ignoredId, ...incomingWithoutId } = incoming;
            const index = data.findIndex((quote) => quote.id === targetId);
            if (index !== -1) {
              data[index] = { ...data[index], ...incomingWithoutId, id: targetId } as QuoteRow;
            }
            return [{ insertId: targetId }];
          },
        }),
      }),
    }),
  });

  return {
    select,
    insert,
    delete: del,
    update,
    reset,
    get data() {
      return data;
    },
  };
};
