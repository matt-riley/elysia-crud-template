import { describe, expect, test } from "bun:test";
import { Elysia } from "elysia";
import { rateLimit } from "./rateLimit";

describe("rateLimit plugin", () => {
  test("blocks after max and resets after window", async () => {
    let ts = 0;
    const now = () => ts;

    const app = new Elysia().use(rateLimit({ windowMs: 10, max: 2, now })).get("/", () => "ok");

    const req = () => new Request("http://localhost/", { headers: { "x-forwarded-for": "ip" } });

    expect((await app.handle(req())).status).toBe(200);
    expect((await app.handle(req())).status).toBe(200);

    const blocked = await app.handle(req());
    expect(blocked.status).toBe(429);
    await expect(blocked.json()).resolves.toEqual({ message: "Rate limit exceeded" });

    ts = 11;
    expect((await app.handle(req())).status).toBe(200);
  });

  test("cleans up expired buckets", async () => {
    let ts = 0;
    const now = () => ts;
    const store = new Map<string, { count: number; resetAt: number }>();

    const app = new Elysia()
      .use(
        rateLimit({
          windowMs: 10,
          cleanupIntervalMs: 10,
          max: 100,
          now,
          store,
          key: (r) => r.headers.get("x-forwarded-for")!,
        }),
      )
      .get("/", () => "ok");

    const req = (ip: string) =>
      new Request("http://localhost/", { headers: { "x-forwarded-for": ip } });

    await app.handle(req("a"));
    await app.handle(req("b"));
    await app.handle(req("c"));
    expect(store.size).toBe(3);

    ts = 11;
    await app.handle(req("d"));
    // Cleanup runs before handling, so expired buckets should be removed.
    expect(store.size).toBe(1);
    expect(store.has("d")).toBeTrue();
  });
});
