// fallow-ignore-file coverage-gaps
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import pkg from "../package.json" with { type: "json" };
import * as routes from "./routes";
import { observability } from "./plugins/observability";
import { logger } from "./logger";

const app = new Elysia({
  aot: Bun.env.NODE_ENV === "production",
})
  .use(observability())
  .use(
    cors({
      origin: Bun.env.CORS_ORIGIN ?? true,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    }),
  )
  .use(
    swagger({
      documentation: {
        info: {
          title: pkg.name,
          version: pkg.version,
        },
      },
    }),
  )
  .use(routes.health)
  .group("/quotes", (app) =>
    app
      .use(routes.get_quote)
      .use(routes.get_quotes)
      .use(routes.add_quote)
      .use(routes.delete_quote)
      .use(routes.update_quote),
  )
  .listen(3000);

logger.info(
  {
    hostname: app.server?.hostname,
    port: app.server?.port,
  },
  "server_listening",
);
