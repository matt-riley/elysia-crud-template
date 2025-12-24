import Elysia from "elysia";
import * as types from "../types";
import { getDb, getDbCached } from "../db";

export const setup = new Elysia({ name: "setup" })
  .model({
    quote: types.quote,
    quotes: types.quotes,
    intId: types.numeric_id,
    error: types.error,
  })
  .derive(() => {
    const cached = getDbCached();
    if (cached) return { db: cached };
    return getDb().then((db) => ({ db }));
  });
