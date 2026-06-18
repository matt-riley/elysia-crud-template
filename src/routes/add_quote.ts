import { Elysia } from "elysia";
import { setup } from "./setup";
import type { NewQuote } from "../db/schema/quote";
import { quotes } from "../db/schema/quote";

export const add_quote = new Elysia().use(setup()).post(
  "/",
  async ({ body, set, db }) => {
    const newQuote = body as NewQuote;
    const adding_quote = await db.insert(quotes).values(newQuote).returning({ id: quotes.id });
    set.status = "OK";
    return { id: adding_quote[0].id };
  },
  {
    type: "json",
    body: "quoteCreate",
    response: "intId",
  },
);
