import Elysia from "elysia";
import { setup } from "./setup";
import { quotes } from "../db/schema/quote";
import { eq, sql } from "drizzle-orm";

export const delete_quote = new Elysia().use(setup).delete(
  "/:id",
  async ({ params: { id }, set, db }) => {
    const prepare_delete_quote = db
      .delete(quotes)
      .where(eq(quotes.id, sql.placeholder("id")))
      .prepare();

    const quote = await prepare_delete_quote.execute({ id: id });
    set.status = "OK";
    return { id: quote[0].insertId };
  },
  {
    type: "json",
    response: "intId",
    params: "intId",
  },
);
