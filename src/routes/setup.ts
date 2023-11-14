import Elysia from "elysia";
import * as types from "../types";
import { db } from "../db";

export const setup = new Elysia({ name: "setup" })
  .model({
    quote: types.quote,
    quotes: types.quotes,
    intId: types.numeric_id,
  })
  .decorate("db", db);
