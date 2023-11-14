import Elysia from "elysia";
import { setup } from "./setup";
import { quotes } from "../db/schema/quote";

export const get_quotes = new Elysia().use(setup).get(
  "/",
  async ({ set, db }) => {
    const prepare_get_quotes = db.select().from(quotes).prepare();

    const found_quotes = await prepare_get_quotes.execute();
    set.status = "OK";
    return found_quotes;
  },
  {
    type: "json",
    response: "quotes",
  },
);
