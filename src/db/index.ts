import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import type { Connection } from "mysql2/promise";

type DrizzleDb = ReturnType<typeof drizzle>;

const injectedDb = (globalThis as { __TEST_DB?: DrizzleDb }).__TEST_DB;

let connection: Connection | undefined;
let db: DrizzleDb;

if (injectedDb) {
  db = injectedDb;
} else {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  db = drizzle(connection);
}

export { connection, db };
