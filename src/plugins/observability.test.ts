import { describe, expect, test } from "bun:test";
import { Elysia } from "elysia";
import { observability } from "./observability";

type InfoLog = {
  msg?: string;
  requestId: string;
  method?: string;
  path?: string;
  status?: number;
  durationMs?: number;
};

const createInfoLogger = (logs: InfoLog[]) => ({
  info: (obj: object, msg?: string, ..._rest: unknown[]) => {
    logs.push({ ...(obj as Omit<InfoLog, "msg">), msg });
  },
});

describe("observability plugin - incoming request id", () => {
  test("sets x-request-id from incoming header and logs", async () => {
    const logs: InfoLog[] = [];
    let ts = 100;

    const app = new Elysia().use(
      observability({
        now: () => ts,
        generateRequestId: () => "generated",
        logger: createInfoLogger(logs),
      }),
    );
    app.get("/path", () => "ok");

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
});

describe("observability plugin - generated request id", () => {
  test("generates request id when missing", async () => {
    const logs: InfoLog[] = [];

    const app = new Elysia()
      .use(
        observability({
          generateRequestId: () => "generated",
          logger: createInfoLogger(logs),
        }),
      )
      .get("/", () => "ok");

    const res = await app.handle(new Request("http://localhost/"));
    expect(res.headers.get("x-request-id")).toBe("generated");

    expect(logs[0].requestId).toBe("generated");
  });
});
