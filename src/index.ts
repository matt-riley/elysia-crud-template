import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import pkg from "../package.json";
import * as routes from "./routes";

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
  .group(
    "/quotes",
    (app) =>
      app.use(routes.get_quote).use(routes.get_quotes).use(routes.add_quote),
    // .post("/", handlers.post_quote, {
    //   body: "quote",
    //   type: "json",
    // }),
  )
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
