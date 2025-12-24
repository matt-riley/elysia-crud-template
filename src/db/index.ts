import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import type { Connection } from "mysql2/promise";

export type DrizzleDb = ReturnType<typeof drizzle>;

// Minimal surface used by our route handlers + mock DB.
export type DbClient = {
  select: (...args: any[]) => any;
  insert: (...args: any[]) => any;
  update: (...args: any[]) => any;
  delete: (...args: any[]) => any;
};

let connection: Connection | undefined;
let db: DbClient | undefined;
let drizzleDb: DrizzleDb | undefined;

export const injectDb = (nextDb: DbClient) => {
  db = nextDb;
  drizzleDb = undefined;
  connection = undefined;
};

const createEnvDb = async () => {
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

export const getDb = async (): Promise<DbClient> => {
  if (db) return db;
  await createEnvDb();
  return db!;
};

export const getDrizzleDb = async (): Promise<DrizzleDb> => {
  if (drizzleDb) return drizzleDb;
  return await createEnvDb();
};

export const getConnection = () => connection;
