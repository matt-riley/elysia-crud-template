import Elysia from "elysia";
import { setup } from "./setup";
import { NewQuote, quotes } from "../db/schema/quote";
import { eq, sql } from "drizzle-orm";

export const update_quote = new Elysia().use(setup()).put(
  "/",
  async ({ body, set, db }) => {
    const newQuote: NewQuote = body;
    const { id, ...updateFields } = newQuote as NewQuote & { id?: number };

    if (id == null) {
      set.status = "Bad Request";
      return { message: "id is required" };
    }

    const prepare_get_quote = db
      .select()
      .from(quotes)
      .where(eq(quotes.id, sql.placeholder("id")))
      .prepare();

    const found = await prepare_get_quote.execute({ id });
    if (!found[0]) {
      set.status = "Not Found";
      return { message: "Quote not found" };
    }

    const prepare_update_quote = db
      .update(quotes)
      .set(updateFields)
      .where(eq(quotes.id, sql.placeholder("id")))
      .prepare();

    await prepare_update_quote.execute({ id });

    set.status = "OK";
    return { id };
  },
  {
    type: "json",
    response: {
      200: "intId",
      400: "error",
      404: "error",
    },
    body: "quoteUpdate",
  },
);
