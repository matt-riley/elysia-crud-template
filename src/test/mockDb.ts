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
    values: async (rows: QuoteRow | QuoteRow[]) => {
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
    },
  });

  const del = () => ({
    where: () => ({
      prepare: () => ({
        execute: async ({ id }: { id: number | string }) => {
          const index = data.findIndex((quote) => quote.id === Number(id));
          if (index === -1) return [];
          const [removed] = data.splice(index, 1);
          return [{ deletedId: removed.id }];
        },
      }),
    }),
  });

  const update = () => ({
    set: async (incoming: Partial<QuoteRow>) => {
      // Mimic Drizzle's behavior when calling `update(...).set(...)` without a `where()`:
      // apply the incoming values to all rows.
      // Never update the primary key `id` in this bulk operation to avoid duplicate IDs.
      if (data.length === 0) {
        return [];
      }

      const updated: QuoteRow[] = [];
      // Strip `id` from the incoming values so it is not applied to every row.
      const { id: _ignoredId, ...incomingWithoutId } = incoming;
      for (const quote of data) {
        const merged = { ...quote, ...incomingWithoutId } as QuoteRow;
        // Always preserve the existing id for each row.
        merged.id = quote.id;
        updated.push(merged);
      }

      data = updated;
      lastId = data.reduce((max, { id }) => (id > max ? id : max), 0);

      const firstId = data[0]?.id ?? lastId;
      return [{ insertId: firstId }];
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
