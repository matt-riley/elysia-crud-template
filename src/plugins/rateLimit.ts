import Elysia from "elysia";

export type RateLimitOptions = {
  windowMs?: number;
  max?: number;
  key?: (request: Request) => string;
  now?: () => number;
  cleanupIntervalMs?: number;
  store?: Map<string, { count: number; resetAt: number }>;
};

export const rateLimit = ({
  windowMs = 60_000,
  max = 60,
  key = (request) => request.headers.get("x-forwarded-for") ?? "anonymous",
  now = () => Date.now(),
  cleanupIntervalMs = windowMs,
  store,
}: RateLimitOptions = {}) => {
  const hits = store ?? new Map<string, { count: number; resetAt: number }>();
  let nextCleanupAt = now() + cleanupIntervalMs;

  const cleanup = (ts: number) => {
    for (const [k, bucket] of hits) {
      if (bucket.resetAt <= ts) hits.delete(k);
    }
  };

  return new Elysia({ name: "rateLimit" }).onBeforeHandle(({ request, set }) => {
    const ts = now();

    if (ts >= nextCleanupAt) {
      cleanup(ts);
      nextCleanupAt = ts + cleanupIntervalMs;
    }

    const k = key(request);
    const existing = hits.get(k);

    const bucket =
      !existing || existing.resetAt <= ts ? { count: 0, resetAt: ts + windowMs } : existing;
    bucket.count += 1;
    hits.set(k, bucket);

    if (bucket.count > max) {
      set.status = "Too Many Requests";
      return { message: "Rate limit exceeded" };
    }
  });
};
