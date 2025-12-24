import pino, { stdSerializers } from "pino";

export const logger = pino({
  level: process.env.LOG_LEVEL ?? "info",
  base: {
    app: process.env.APP_NAME ?? "elysia-crud-template",
    env: process.env.NODE_ENV ?? "development",
  },
  serializers: {
    err: stdSerializers.err,
  },
});
