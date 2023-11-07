import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import pkg from "../package.json";
import * as handlers from "./handlers";
import * as types from "./types";

const app = new Elysia();

app.use(
  swagger({
    documentation: {
      info: {
        title: pkg.name,
        version: pkg.version,
      },
    },
  }),
);

app.get("/", () => "Hello Elysia");

app
  .model({
    quote: types.quote,
    quotes: types.quotes,
    intId: types.numeric_id,
  })
  .group("/quotes", (app) =>
    app
      .get("/", handlers.get_quotes, {
        type: "json",
        response: "quotes",
      })
      .get("/:id", handlers.get_quote, {
        type: "json",
        response: "quote",
        params: "intId",
      })
      .post("/", handlers.post_quote, {
        body: "quote",
        type: "json",
      }),
  )
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
