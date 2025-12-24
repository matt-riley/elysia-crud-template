import Elysia from "elysia";
import { randomUUID } from "crypto";

export type ObservabilityOptions = {
  now?: () => number;
  generateRequestId?: () => string;
  logger?: (line: string) => void;
};

export const observability = ({
  now = () => Date.now(),
  generateRequestId = () => randomUUID(),
  logger = (line) => console.info(line),
}: ObservabilityOptions = {}) =>
  new Elysia({ name: "observability" })
    .derive(({ request, set }) => {
      const requestId = request.headers.get("x-request-id") ?? generateRequestId();
      set.headers["x-request-id"] = requestId;
      return { requestId, startedAt: now() };
    })
    .onAfterHandle(({ request, requestId, startedAt, set }) => {
      const url = new URL(request.url);

      logger(
        JSON.stringify({
          level: "info",
          msg: "request",
          requestId,
          method: request.method,
          path: url.pathname,
          status: set.status ?? 200,
          durationMs: now() - startedAt,
        }),
      );
    });
