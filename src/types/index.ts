import { t } from "elysia";

export { quotes, quote, quoteCreate, quoteUpdate } from "./quote";

export const quotesQuery = t.Object({
  limit: t.Optional(t.Numeric({ minimum: 1, maximum: 100 })),
  offset: t.Optional(t.Numeric({ minimum: 0 })),
  author: t.Optional(t.String()),
});

export const numeric_id = t.Object({
  id: t.Numeric(),
});

export const error = t.Object({
  message: t.String(),
});
