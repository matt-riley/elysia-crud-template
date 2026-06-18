import { Elysia } from "elysia";
import { setup } from "./setup";
import { quotes } from "../db/schema/quote";
import { eq } from "drizzle-orm";

export const get_quotes = new Elysia().use(setup()).get(
  "/",
  async ({ set, db, query }) => {
    const { limit, offset, author } = query;

    // Build query dynamically — $dynamic() makes the builder awaitable
    // so conditional .where/.limit/.offset chains compile cleanly.
    const q = db.select().from(quotes).$dynamic();

    if (author) {
      q.where(eq(quotes.author, author));
    }

    if (limit != null) q.limit(limit);
    if (offset != null) q.offset(offset);

    const found_quotes = await q;

    set.status = "OK";
    return found_quotes;
  },
  {
    type: "json",
    query: "quotesQuery",
    response: "quotes",
  },
);
