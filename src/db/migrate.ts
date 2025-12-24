import { migrate } from "drizzle-orm/mysql2/migrator";
import { db, connection } from "./index";

await migrate(db, { migrationsFolder: "./drizzle/migrations" });

if (connection) {
  await connection.end();
}
