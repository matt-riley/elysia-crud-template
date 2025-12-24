import { beforeEach, describe, expect, test } from "bun:test";
import { Elysia } from "elysia";
import { injectDb } from "../db";
import type { DbClient } from "../db";
import { createMockDb } from "../test/mockDb";
import { observability } from "../plugins/observability";
import { setup } from "./setup";

type ErrorLog = {
  msg: string;
  requestId: string;
  code: string;
  method: string;
  path: string;
  err: Error;
};

describe("setup plugin", () => {
  beforeEach(() => {
    const mockDb = createMockDb();
    injectDb(mockDb as unknown as DbClient);
    mockDb.reset([]);
  });

  test("logs structured error with requestId, code, method, path, err", async () => {
    const logs: ErrorLog[] = [];

    const app = new Elysia()
      .use(
        observability({
          generateRequestId: () => "rid",
          logger: { info: () => {} },
        }),
      )
      .use(
        setup({
          logger: {
            error: (obj, msg) => logs.push({ ...(obj as object), msg } as ErrorLog),
          },
        }),
      )
      .get("/boom", () => {
        throw new Error("boom");
      });

    const res = await app.handle(new Request("http://localhost/boom"));

    expect(res.status).toBe(500);
    await expect(res.json()).resolves.toEqual({ message: "Internal Server Error" });

    expect(logs.length).toBe(1);
    expect(logs[0]).toMatchObject({
      msg: "error",
      requestId: "rid",
      method: "GET",
      path: "/boom",
    });
    expect(typeof logs[0].code).toBe("string");
    expect(logs[0].err).toBeInstanceOf(Error);
    expect(logs[0].err.message).toBe("boom");
  });
});
