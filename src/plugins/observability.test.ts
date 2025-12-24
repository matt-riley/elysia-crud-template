import { describe, expect, test } from "bun:test";
import { Elysia } from "elysia";
import { observability } from "./observability";

describe("observability plugin", () => {
  test("sets x-request-id from incoming header and logs", async () => {
    type InfoLog = {
      msg: string;
      requestId: string;
      method: string;
      path: string;
      status: number;
      durationMs?: number;
    };

    const logs: InfoLog[] = [];
    let ts = 100;

    const app = new Elysia()
      .use(
        observability({
          now: () => ts,
          generateRequestId: () => "generated",
          logger: {
            info: (obj, msg) => logs.push({ ...(obj as object), msg }),
          },
        }),
      )
      .get("/path", () => "ok");

    ts = 100;
    const res = await app.handle(
      new Request("http://localhost/path", {
        headers: { "x-request-id": "incoming" },
      }),
    );

    expect(res.status).toBe(200);
    expect(res.headers.get("x-request-id")).toBe("incoming");

    expect(logs.length).toBe(1);
    expect(logs[0]).toMatchObject({
      msg: "request",
      requestId: "incoming",
      method: "GET",
      path: "/path",
      status: 200,
    });
  });

  test("generates request id when missing", async () => {
    type InfoLog = {
      msg: string;
      requestId: string;
      method?: string;
      path?: string;
      status?: number;
      durationMs?: number;
    };

    const logs: InfoLog[] = [];

    const app = new Elysia()
      .use(
        observability({
          generateRequestId: () => "generated",
          logger: {
            info: (obj, msg) => logs.push({ ...(obj as object), msg }),
          },
        }),
      )
      .get("/", () => "ok");

    const res = await app.handle(new Request("http://localhost/"));
    expect(res.headers.get("x-request-id")).toBe("generated");

    expect(logs[0].requestId).toBe("generated");
  });
});
