import { t } from "elysia";

export const quote = t.Object({
  quote: t.String(),
  author: t.String(),
  source: t.String(),
  date: t.Date(),
});

export const quotes = t.Array(quote);
