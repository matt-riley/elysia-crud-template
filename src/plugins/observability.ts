import type Elysia from "elysia";
import { randomUUID } from "crypto";
import type { Logger } from "pino";
import { logger as defaultLogger } from "../logger";

export type ObservabilityOptions = {
  now?: () => number;
  generateRequestId?: () => string;
  logger?: Pick<Logger, "info">;
};

export const observability =
  ({
    now = () => Date.now(),
    generateRequestId = () => randomUUID(),
    logger = defaultLogger,
  }: ObservabilityOptions = {}) =>
  (app: Elysia) =>
    app
      .derive(({ request, set }) => {
        const requestId = request.headers.get("x-request-id") ?? generateRequestId();
        set.headers["x-request-id"] = requestId;
        return { requestId, startedAt: now() };
      })
      .onAfterHandle(({ request, requestId, startedAt, set }) => {
        const url = new URL(request.url);

        const endedAt = now();

        logger.info(
          {
            requestId,
            method: request.method,
            path: url.pathname,
            status: set.status ?? 200,
            durationMs: endedAt - startedAt,
          },
          "request",
        );
      });
