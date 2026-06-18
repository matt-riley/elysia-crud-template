# Copilot coding agent instructions (elysia-crud-template)

## Repository summary

A Bun + TypeScript API template built with **Elysia** (HTTP server) and **Drizzle ORM** backed by **PostgreSQL**. Exposes CRUD endpoints for a `quotes` table with Bun tests running against an in-memory mock DB.

## Tech stack

- Runtime: **Bun** (`bun --version` → 1.3.x)
- Language: **TypeScript** (`typescript@6.0.3`)
- Web framework: **Elysia** (`elysia@1.4.x`)
- Plugins: `@elysiajs/swagger`, `@elysiajs/cors`, `@elysiajs/eden`
- DB/ORM: **drizzle-orm** + **pg** (node-postgres)
- Migrations: Drizzle Kit (SQL files in `./drizzle/migrations`)
- Logging: **pino**
- Lint/format: **oxlint**, **prettier**, husky + lint-staged

## Project layout

```
src/
  index.ts              – app entrypoint (Elysia config, CORS, Swagger, routes)
  logger.ts             – pino logger setup
  db/
    index.ts            – DB connection pool + injectDb for tests
    migrate.ts          – runs Drizzle migrations
    schema/quote.ts     – Drizzle table definition + inferred types
  routes/
    index.ts            – barrel re-exports
    setup.ts            – shared plugin: .model(), .derive(db), .onError()
    health.ts           – GET /health
    get_quote.ts        – GET /quotes/:id
    get_quotes.ts       – GET /quotes (with pagination + author filter)
    add_quote.ts        – POST /quotes
    update_quote.ts     – PUT /quotes
    delete_quote.ts     – DELETE /quotes/:id
    *.test.ts           – Bun tests (no DB required)
  plugins/
    observability.ts    – request-id header + structured access logging
    rateLimit.ts        – in-memory sliding-window rate limiter
  types/
    index.ts            – barrel re-exports
    quote.ts            – Elysia.t validation schemas
  test/
    mockDb.ts           – in-memory Drizzle-like adapter
```

## Commands

| Command           | What it does                    |
| ----------------- | ------------------------------- |
| `bun install`     | Install dependencies            |
| `bun test`        | Run all tests (no DB required)  |
| `bun run dev`     | Start server with file watching |
| `bun run start`   | Start server (production)       |
| `bun run migrate` | Run Drizzle SQL migrations      |
| `bun run lint`    | Lint with oxlint                |
| `bun run format`  | Format with prettier            |

## Testing

Tests use `app.handle(new Request(...))` (Elysia's recommended pattern) with an in-memory mock DB injected via `injectDb()`. No database is required to run tests.

Always validate changes with `bun test` before claiming a task is complete.

## Code style

- Use **named imports** from Elysia: `import { Elysia, t } from "elysia"` (not default imports)
- Use `import type` for type-only imports from Elysia: `import type { Elysia } from "elysia"`
- Each route file exports an Elysia plugin instance using `new Elysia()`
- Routes `.use(setup())` to get `db` in context + shared schemas
- Validation schemas live in `src/types/` and are registered via `.model()` in `setup.ts`

## Environment

`.env.example` documents required variables:

- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`
- `LOG_LEVEL` (defaults to `info`)
- `CORS_ORIGIN` (defaults to allow all if unset)

Bun loads `.env` automatically at runtime.
