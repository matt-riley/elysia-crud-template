import Elysia from "elysia";
import * as types from "../types";
import { getDb } from "../db";
import { logger } from "../logger";

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
  .onError(({ code, error, set, requestId, request }) => {
    if (code === "VALIDATION") {
      set.status = "Bad Request";
      const message = error instanceof Error ? error.message : "Invalid request";
      return { message };
    }

    if (code === "NOT_FOUND") {
      set.status = "Not Found";
      return { message: "Not Found" };
    }

    // Avoid leaking internal error details to clients.
    const url = new URL(request.url);
    const err =
      error instanceof Error
        ? { name: error.name, message: error.message }
        : { message: typeof error === "string" ? error : "Unknown error" };

    logger.error(
      {
        requestId,
        code,
        method: request.method,
        path: url.pathname,
        err,
      },
      "error",
    );

    set.status = "Internal Server Error";
    return { message: "Internal Server Error" };
  })
  .derive(async () => ({
    db: await getDb(),
  }));
