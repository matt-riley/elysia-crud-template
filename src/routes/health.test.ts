import { describe, expect, test } from "bun:test";
import { Elysia } from "elysia";
import { health } from "./health";

describe("health route", () => {
  test("returns ok", async () => {
    const app = new Elysia().use(health);
    const response = await app.handle(new Request("http://localhost/health"));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
  });
});
