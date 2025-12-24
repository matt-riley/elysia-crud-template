import Elysia from "elysia";
import * as types from "../types";
import { getDb } from "../db";

export const setup = new Elysia({ name: "setup" })
  .model({
    quote: types.quote,
    quoteCreate: types.quoteCreate,
    quoteUpdate: types.quoteUpdate,
    quotes: types.quotes,
    quotesQuery: types.quotesQuery,
    intId: types.numeric_id,
    error: types.error,
  })
  .onError(({ code, error, set }) => {
    if (code === "VALIDATION") {
      set.status = "Bad Request";
      return { message: (error as Error).message };
    }

    if (code === "NOT_FOUND") {
      set.status = "Not Found";
      return { message: "Not Found" };
    }

    const message = error instanceof Error ? error.message : String(error);
    set.status = "Internal Server Error";

    if (process.env.NODE_ENV !== "production") {
      return { message };
    }

    return { message: "Internal Server Error" };
  })
  .derive(async () => ({
    db: await getDb(),
  }));
