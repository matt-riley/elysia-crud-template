import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const quotes = pgTable("quotes", {
  id: serial("id").primaryKey(),
  quote: varchar("quote", { length: 2048 }).notNull(),
  author: varchar("author", { length: 1024 }).notNull(),
  source: varchar("source", { length: 1024 }).notNull(),
});

export type Quote = typeof quotes.$inferSelect;
export type NewQuote = typeof quotes.$inferInsert;
