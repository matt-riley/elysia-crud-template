import Elysia from "elysia";
import { setup } from "./setup";
import { NewQuote, quotes } from "../db/schema/quote";

export const add_quote = new Elysia().use(setup).post(
  "/",
  async ({ body, set, db }) => {
    const newQuote: NewQuote = body;
    const adding_quote = await db.insert(quotes).values(newQuote);

    set.status = "OK";
    return { id: adding_quote[0].insertId };
  },
  {
    type: "json",
    response: "intId",
    body: "quote",
  },
);
