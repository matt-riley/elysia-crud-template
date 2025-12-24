import Elysia from "elysia";
import { setup } from "./setup";
import { quotes } from "../db/schema/quote";
import { eq, sql } from "drizzle-orm";

export const get_quotes = new Elysia().use(setup()).get(
  "/",
  async ({ set, db, query }) => {
    const { limit, offset, author } = query;

    let q = db.select().from(quotes);
    const params: Record<string, unknown> = {};

    if (author) {
      q = q.where(eq(quotes.author, sql.placeholder("author")));
      params.author = author;
    }

    if (limit != null) q = q.limit(limit);
    if (offset != null) q = q.offset(offset);

    const found_quotes = await q.prepare().execute(params);

    set.status = "OK";
    return found_quotes;
  },
  {
    type: "json",
    query: "quotesQuery",
    response: "quotes",
  },
);
