import Elysia from "elysia";

export type RateLimitOptions = {
  windowMs?: number;
  max?: number;
  key?: (request: Request) => string;
};

export const rateLimit = ({
  windowMs = 60_000,
  max = 60,
  key = (request) => request.headers.get("x-forwarded-for") ?? "anonymous",
}: RateLimitOptions = {}) => {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return new Elysia({ name: "rateLimit" }).onBeforeHandle(({ request, set }) => {
    const now = Date.now();
    const k = key(request);
    const existing = hits.get(k);

    const bucket =
      !existing || existing.resetAt <= now ? { count: 0, resetAt: now + windowMs } : existing;
    bucket.count += 1;
    hits.set(k, bucket);

    if (bucket.count > max) {
      set.status = "Too Many Requests";
      return { message: "Rate limit exceeded" };
    }
  });
};
