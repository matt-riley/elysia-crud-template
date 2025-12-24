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
    from: () => ({
      where: () => ({
        prepare: () => ({
          execute: async ({ id }: { id: number | string }) => {
            const parsedId = parseNumericId(id);
            return data.filter((quote) => quote.id === parsedId);
          },
        }),
      }),
      prepare: () => ({
        execute: async () => clone(data),
      }),
    }),
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
        lastId = data.reduce((max, { id }) => (id > max ? id : max), 0);
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
