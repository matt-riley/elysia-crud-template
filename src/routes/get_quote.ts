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

    const quote = await prepare_get_quote.execute({ id: id });
    set.status = "OK";
    return quote[0];
  },
  {
    type: "json",
    response: "quote",
    params: "intId",
  },
);
