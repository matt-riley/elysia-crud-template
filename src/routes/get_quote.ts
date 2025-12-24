import Elysia from "elysia";
import { setup } from "./setup";
import { quotes } from "../db/schema/quote";
import { eq, sql } from "drizzle-orm";

export const get_quote = new Elysia().use(setup).get(
  "/:id",
  async ({ params: { id }, set, db }) => {
    const prepare_get_quote = db
      .select()
      .from(quotes)
      .where(eq(quotes.id, sql.placeholder("id")))
      .prepare();

    const found = await prepare_get_quote.execute({ id });
    const quote = found[0];

    if (!quote) {
      set.status = "Not Found";
      return { message: "Quote not found" };
    }

    set.status = "OK";
    return quote;
  },
  {
    type: "json",
    response: {
      200: "quote",
      404: "error",
    },
    params: "intId",
  },
);
