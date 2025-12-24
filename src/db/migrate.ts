import { migrate } from "drizzle-orm/mysql2/migrator";
import { getConnection, getDrizzleDb } from "./index";

const db = await getDrizzleDb();
await migrate(db, { migrationsFolder: "./drizzle/migrations" });

const connection = getConnection();
if (connection) {
  await connection.end();
}
