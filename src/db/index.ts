import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import type { Connection } from "mysql2/promise";

export type DrizzleDb = ReturnType<typeof drizzle>;

// Minimal surface used by our route handlers + mock DB.
// Use Drizzle's method types for stronger type safety.
export type DbClient = Pick<DrizzleDb, "select" | "insert" | "update" | "delete">;

let connection: Connection | undefined;
let db: DbClient | undefined;
let drizzleDb: DrizzleDb | undefined;
let initPromise: Promise<DrizzleDb> | undefined;

export const resetDb = () => {
  connection = undefined;
  db = undefined;
  drizzleDb = undefined;
  initPromise = undefined;
};

export const injectDb = (nextDb: DbClient) => {
  resetDb();
  db = nextDb;
};

const initEnvDb = async (): Promise<DrizzleDb> => {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  drizzleDb = drizzle(connection);
  db = drizzleDb;
  return drizzleDb;
};

// Promise-based lock to ensure we only initialize the DB connection once,
// even if multiple requests call getDb()/getDrizzleDb() concurrently.
const ensureEnvDb = async (): Promise<DrizzleDb> => {
  if (drizzleDb) return drizzleDb;
  if (!initPromise) {
    initPromise = initEnvDb().catch((err) => {
      // Allow retry after a failed init.
      initPromise = undefined;
      throw err;
    });
  }
  return await initPromise;
};

export const getDb = async (): Promise<DbClient> => {
  if (db) return db;
  await ensureEnvDb();
  return db!;
};

export const getDrizzleDb = async (): Promise<DrizzleDb> => {
  return await ensureEnvDb();
};

export const getConnection = () => connection;
