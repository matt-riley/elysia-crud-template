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

  const select = () => ({
    from: () => {
      const state: { limit?: number; offset?: number } = {};

      const applyWindow = (rows: QuoteRow[]) => {
        const start = state.offset ?? 0;
        const end = state.limit != null ? start + state.limit : undefined;
        return rows.slice(start, end);
      };

      const builder = {
        where: () => ({
          limit: (n: number) => {
            state.limit = n;
            return builder;
          },
          offset: (n: number) => {
            state.offset = n;
            return builder;
          },
          prepare: () => ({
            execute: async ({ id, author }: { id?: number | string; author?: string }) => {
              let rows = clone(data);
              if (id != null) {
                const parsedId = parseNumericId(id);
                rows = rows.filter((quote) => quote.id === parsedId);
              }
              if (author != null) {
                rows = rows.filter((quote) => quote.author === author);
              }
              return applyWindow(rows);
            },
          }),
        }),
        limit: (n: number) => {
          state.limit = n;
          return builder;
        },
        offset: (n: number) => {
          state.offset = n;
          return builder;
        },
        prepare: () => ({
          execute: async ({ author }: { author?: string } = {}) => {
            let rows = clone(data);
            if (author != null) rows = rows.filter((quote) => quote.author === author);
            return applyWindow(rows);
          },
        }),
      };

      return builder;
    },
  });

  const insert = () => ({
    values: (rows: QuoteRow | QuoteRow[]) => {
      const execute = async () => {
        const incomingRows = Array.isArray(rows) ? rows : [rows];
        const results: { insertId: number }[] = [];
        for (const incoming of incomingRows) {
          const id = incoming.id ?? ++lastId;
          const record: QuoteRow = { ...incoming, id };
          data.push(record);
          lastId = Math.max(lastId, id);
          results.push({ insertId: id });
        }
        return results;
      };

      return {
        execute,
        prepare: () => ({ execute }),
      };
    },
  });

  const del = () => ({
    where: () => ({
      prepare: () => ({
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

  const update = () => ({
    set: (incoming: Partial<QuoteRow>) => {
      const executeWhere = async ({ id }: { id: number | string }) => {
        const targetId = parseNumericId(id);
        const { id: _ignoredId, ...incomingWithoutId } = incoming;
        const index = data.findIndex((quote) => quote.id === targetId);
        if (index !== -1) {
          data[index] = { ...data[index], ...incomingWithoutId, id: targetId } as QuoteRow;
        }
        return [{ insertId: targetId }];
      };

      return {
        where: () => ({
          prepare: () => ({ execute: executeWhere }),
        }),
      };
    },
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
