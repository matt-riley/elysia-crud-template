import type { Quote } from "../db/schema/quote";

type QuoteRow = Quote;
type QueryParams = Record<string, unknown>;
type RowFilterState = {
  limit?: number;
  offset?: number;
  filters: Record<string, unknown>;
};
type MockDbState = {
  data: QuoteRow[];
  lastId: number;
};
type ParsedCondition = { column: string; value: unknown };

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));
const isObjectRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;
const computeLastId = (rows: QuoteRow[]) => rows.reduce((max, { id }) => (id > max ? id : max), 0);

const parseNumericId = (id: number | string) => {
  const value = Number(id);
  if (!Number.isFinite(value)) throw new TypeError(`Invalid id: ${id}`);
  return value;
};

const parseCondition = (condition: unknown): ParsedCondition | null => {
  if (!isObjectRecord(condition)) return null;

  const chunks = condition.queryChunks;
  if (!Array.isArray(chunks) || chunks.length < 4) return null;

  const columnRef = chunks[1];
  if (!isObjectRecord(columnRef) || typeof columnRef.name !== "string") return null;

  const rawValue = chunks[3];
  const value = isObjectRecord(rawValue) && "value" in rawValue ? rawValue.value : rawValue;

  return { column: columnRef.name, value };
};

const applyWindow = (rows: QuoteRow[], state: RowFilterState) => {
  const start = state.offset ?? 0;
  const end = state.limit != null ? start + state.limit : undefined;
  return rows.slice(start, end);
};

const applyPreparedParams = (rows: QuoteRow[], params: QueryParams) => {
  let next = rows;
  if ("id" in params) {
    const parsedId = parseNumericId(params.id as number | string);
    next = next.filter((quote) => quote.id === parsedId);
  }
  if ("author" in params && params.author != null) {
    next = next.filter((quote) => quote.author === params.author);
  }
  return next;
};

const applyStateFilters = (rows: QuoteRow[], state: RowFilterState) => {
  let next = rows;
  if (state.filters.author) {
    next = next.filter((quote) => quote.author === state.filters.author);
  }
  if (state.filters.id) {
    const parsedId = parseNumericId(state.filters.id as number | string);
    next = next.filter((quote) => quote.id === parsedId);
  }
  return next;
};

const executeSelect = (
  state: MockDbState,
  filterState: RowFilterState,
  params: QueryParams,
  useFilters: boolean,
) => {
  const baseRows = clone(state.data);
  const preparedRows = applyPreparedParams(baseRows, params);
  const filteredRows = useFilters ? applyStateFilters(preparedRows, filterState) : preparedRows;
  return applyWindow(filteredRows, filterState);
};

const createSelectQuery = (state: MockDbState) => {
  const filterState: RowFilterState = { filters: {} };
  const dynamicBuilder: Record<string, unknown> = {
    $dynamic: () => dynamicBuilder,
    where: (condition: unknown) => {
      const parsed = parseCondition(condition);
      if (parsed) {
        filterState.filters[parsed.column] = parsed.value;
      }
      return dynamicBuilder;
    },
    limit: (n: number) => {
      filterState.limit = n;
      return dynamicBuilder;
    },
    offset: (n: number) => {
      filterState.offset = n;
      return dynamicBuilder;
    },
    prepare: (_name: string) => ({
      execute: (params: QueryParams) => executeSelect(state, filterState, params, false),
    }),
    then: (resolve: (rows: QuoteRow[]) => void) => {
      resolve(executeSelect(state, filterState, {}, true));
    },
  };

  return dynamicBuilder;
};

const createInsertQuery = (state: MockDbState) => ({
  values: (row: QuoteRow) => {
    const doInsert = () => {
      const id = row.id ?? ++state.lastId;
      const record: QuoteRow = { ...row, id };
      state.data.push(record);
      state.lastId = Math.max(state.lastId, id);
      return [{ id }];
    };

    return {
      returning: () => doInsert(),
    };
  },
});

const createDeleteQuery = (state: MockDbState) => ({
  where: () => ({
    prepare: (_name: string) => ({
      execute: async ({ id }: { id: number | string }) => {
        const parsedId = parseNumericId(id);
        const index = state.data.findIndex((quote) => quote.id === parsedId);
        if (index === -1) return [];
        const [removed] = state.data.splice(index, 1);
        return [{ deletedId: removed.id }];
      },
    }),
  }),
});

const createUpdateQuery = (state: MockDbState) => ({
  set: (incoming: Partial<QuoteRow>) => ({
    where: () => ({
      prepare: (_name: string) => ({
        execute: async ({ id }: { id: number | string }) => {
          const targetId = parseNumericId(id);
          const { id: _ignoredId, ...incomingWithoutId } = incoming;
          const index = state.data.findIndex((quote) => quote.id === targetId);
          if (index !== -1) {
            state.data[index] = {
              ...state.data[index],
              ...incomingWithoutId,
              id: targetId,
            } as QuoteRow;
          }
          return [{ insertId: targetId }];
        },
      }),
    }),
  }),
});

export const createMockDb = (initial: QuoteRow[] = []) => {
  const state: MockDbState = {
    data: clone(initial),
    lastId: computeLastId(initial),
  };
  const reset = (next: QuoteRow[]) => {
    state.data = clone(next);
    state.lastId = computeLastId(state.data);
  };

  return {
    select: () => ({
      from: () => createSelectQuery(state),
    }),
    insert: () => createInsertQuery(state),
    delete: () => createDeleteQuery(state),
    update: () => createUpdateQuery(state),
    reset,
    get data() {
      return state.data;
    },
  };
};
