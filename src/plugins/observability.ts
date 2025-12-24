import Elysia from "elysia";
import { randomUUID } from "crypto";

export const observability = new Elysia({ name: "observability" })
  .derive(({ request, set }) => {
    const requestId = request.headers.get("x-request-id") ?? randomUUID();
    set.headers["x-request-id"] = requestId;
    return { requestId, startedAt: Date.now() };
  })
  .onAfterHandle(({ request, requestId, startedAt, set }) => {
    const url = new URL(request.url);

    console.info(
      JSON.stringify({
        level: "info",
        msg: "request",
        requestId,
        method: request.method,
        path: url.pathname,
        status: set.status ?? 200,
        durationMs: Date.now() - startedAt,
      }),
    );
  });
