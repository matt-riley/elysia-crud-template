import Elysia from "elysia";
import { setup } from "./setup";
import { quotes } from "../db/schema/quote";

export const get_quotes = new Elysia().use(setup).get(
  "/",
  async ({ set, db, query }) => {
    const prepare_get_quotes = db.select().from(quotes).prepare();

    const found_quotes = await prepare_get_quotes.execute();

    const { limit, offset, author } = query;
    let results = found_quotes;

    if (author) {
      results = results.filter((quote) => quote.author === author);
    }

    const start = offset ?? 0;
    const end = limit != null ? start + limit : undefined;

    set.status = "OK";
    return results.slice(start, end);
  },
  {
    type: "json",
    query: "quotesQuery",
    response: "quotes",
  },
);
