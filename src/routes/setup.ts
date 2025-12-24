import Elysia from "elysia";
import * as types from "../types";
import { getDb } from "../db";

export const setup = new Elysia({ name: "setup" })
  .model({
    quote: types.quote,
    quotes: types.quotes,
    intId: types.numeric_id,
  })
  .derive(async () => ({
    db: await getDb(),
  }));
