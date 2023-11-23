import { t } from "elysia";

export const quote = t.Object({
  id: t.Optional(t.Integer()),
  quote: t.String(),
  author: t.String(),
  source: t.String(),
});

export const quotes = t.Array(quote);
