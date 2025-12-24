import { drizzle } from "drizzle-orm/node-postgres";
import { Pool, type PoolConfig } from "pg";

export type DrizzleDb = ReturnType<typeof drizzle>;

// Minimal surface used by our route handlers + mock DB.
// Use Drizzle's method types for stronger type safety.
export type DbClient = Pick<DrizzleDb, "select" | "insert" | "update" | "delete">;

let pool: Pool | undefined;
let db: DbClient | undefined;
let drizzleDb: DrizzleDb | undefined;
let initPromise: Promise<DrizzleDb> | undefined;

export const resetDb = () => {
  pool = undefined;
  db = undefined;
  drizzleDb = undefined;
  initPromise = undefined;
};

export const injectDb = (nextDb: DbClient) => {
  resetDb();
  db = nextDb;
};

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
};

const initEnvDb = async (): Promise<DrizzleDb> => {
  const config: PoolConfig = {
    host: requireEnv("DB_HOST"),
    user: requireEnv("DB_USER"),
    password: requireEnv("DB_PASS"),
    database: requireEnv("DB_NAME"),
  };

  pool = new Pool(config);

  drizzleDb = drizzle(pool);
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

export const getConnection = () => pool;
