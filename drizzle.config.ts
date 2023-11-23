import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/quote.ts",
  out: "./drizzle/migrations",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
} satisfies Config;
