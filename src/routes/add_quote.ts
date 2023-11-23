import Elysia from "elysia";
import { setup } from "./setup";
import { NewQuote, quotes } from "../db/schema/quote";

export const add_quote = new Elysia().use(setup).post(
  "/",
  async ({ body, set, db }) => {
    const newQuote: NewQuote = body;
    try {
      const adding_quote = await db.insert(quotes).values([newQuote]);
      set.status = "OK";
      return { id: adding_quote[0].insertId };
    } catch (err) {
      throw new Error("There was an error adding the quote");
    }
  },
  {
    type: "json",
    response: "intId",
    body: "quote",
    error({ code, error }) {
      switch (code) {
        default:
          console.log(JSON.stringify(error));
      }
    },
  },
);
