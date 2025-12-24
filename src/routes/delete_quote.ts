import Elysia from "elysia";
import { setup } from "./setup";
import { quotes } from "../db/schema/quote";
import { eq, sql } from "drizzle-orm";

export const delete_quote = new Elysia().use(setup()).delete(
  "/:id",
  async ({ params: { id }, set, db }) => {
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

    const prepare_delete_quote = db
      .delete(quotes)
      .where(eq(quotes.id, sql.placeholder("id")))
      .prepare();

    await prepare_delete_quote.execute({ id });
    set.status = "OK";
    return { id: Number(id) };
  },
  {
    response: {
      200: "intId",
      404: "error",
    },
    params: "intId",
  },
);
