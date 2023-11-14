import { bigint, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const quotes = mysqlTable("quotes", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  quote: varchar("quote", { length: 2048 }).notNull(),
  author: varchar("author", { length: 1024 }).notNull(),
  source: varchar("source", { length: 1024 }).notNull(),
});

export type Quote = typeof quotes.$inferSelect;
export type NewQuote = typeof quotes.$inferInsert;
