import { migrate } from "drizzle-orm/node-postgres/migrator";
import { getConnection, getDrizzleDb } from "./index";

const db = await getDrizzleDb();
await migrate(db, { migrationsFolder: "./drizzle/migrations" });

const pool = getConnection();
if (pool) {
  await pool.end();
}
