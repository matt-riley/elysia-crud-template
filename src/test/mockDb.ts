import type { Quote } from "../db/schema/quote";

type QuoteRow = Quote & { id: number };

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export const createMockDb = (initial: QuoteRow[] = []) => {
  let data = clone(initial);
  let lastId = data.reduce((max, { id }) => (id > max ? id : max), 0);

  const reset = (next: QuoteRow[]) => {
    data = clone(next);
    lastId = data.reduce((max, { id }) => (id > max ? id : max), 0);
  };

  const select = () => ({
    from: () => ({
      where: () => ({
        prepare: () => ({
          execute: async ({ id }: { id: number | string }) =>
            data.filter((quote) => quote.id === Number(id)),
        }),
      }),
      prepare: () => ({
        execute: async () => clone(data),
      }),
    }),
  });

  const insert = () => ({
    values: async (rows: QuoteRow[]) => {
      const incoming = rows[0];
      const id = incoming.id ?? ++lastId;
      const record: QuoteRow = { ...incoming, id };
      data.push(record);
      lastId = Math.max(lastId, id);
      return [{ insertId: id }];
    },
  });

  const del = () => ({
    where: () => ({
      prepare: () => ({
        execute: async ({ id }: { id: number | string }) => {
          const index = data.findIndex((quote) => quote.id === Number(id));
          if (index === -1) return [];
          const [removed] = data.splice(index, 1);
          return [{ insertId: removed.id }];
        },
      }),
    }),
  });

  const update = () => ({
    set: async (incoming: QuoteRow) => {
      const id = incoming.id ?? ++lastId;
      const index = data.findIndex((quote) => quote.id === Number(id));
      if (index === -1) {
        data.push({ ...incoming, id });
      } else {
        data[index] = { ...data[index], ...incoming, id };
      }
      lastId = Math.max(lastId, id);
      return [{ insertId: id }];
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
