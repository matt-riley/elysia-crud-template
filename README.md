# Elysia CRUD Template (Bun + Drizzle + Postgres)

A small starter API using **Elysia** (with Swagger) and **Drizzle ORM** backed by **Postgres**, with Bun tests that run against an in-memory mock DB.

## Quick start

```bash
bun install
cp .env.example .env

# Option A: Docker (recommended)
docker compose up -d db
bun run migrate

# Run the API
bun run dev
```

- API: http://localhost:3000
- Swagger UI: http://localhost:3000/swagger
- Healthcheck: http://localhost:3000/health

## Scripts

- `bun run dev` – start server in watch mode
- `bun run start` – start server (no watch)
- `bun run migrate` – run Drizzle SQL migrations from `./drizzle/migrations`
- `bun run start:migrate` – run migrations then start (used by Docker image)
- `bun test` – unit tests (no DB required)
- `bun run lint` / `bun run lint:fix` – lint with **oxlint**
- `bun run format` / `bun run format:check` – format with **prettier**

## Environment

This template expects these variables (copy `.env.example` → `.env`):

- `DB_HOST`
- `DB_USER`
- `DB_PASS`
- `DB_NAME`

`getDb()` fails fast with a clear error if any required env var is missing.

## Tooling

- **CI**: GitHub Actions runs `bun install --frozen-lockfile` and `bun test`.
- **Pre-commit**: Husky runs `lint-staged` (oxlint fixes + prettier formatting) on staged files (installed via `prepare: husky`).

## Example: rate limiting (optional)

A tiny in-memory rate limiter plugin is included at `src/plugins/rateLimit.ts`.

```ts
import { rateLimit } from "./plugins/rateLimit";

app.use(rateLimit({ windowMs: 60_000, max: 60 }));
```
