import Elysia, { t } from "elysia";

export const health = new Elysia().get("/health", () => ({ ok: true }), {
  response: t.Object({
    ok: t.Boolean(),
  }),
});
