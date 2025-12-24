# Elysia CRUD Template (Bun + Drizzle + Postgres)

A small starter API using **Elysia** (with Swagger) and **Drizzle ORM** backed by **Postgres**, with Bun tests that run against an in-memory mock DB.

## What’s included

- Elysia HTTP server with Swagger UI
- Drizzle ORM + SQL migrations (`./drizzle/migrations`)
- Postgres via `docker compose` (optional for local dev)
- Fast unit tests using an in-memory mock DB (no Postgres required)
- Tooling: GitHub Actions CI, Renovate, oxlint, prettier, husky + lint-staged

## Quick start (Docker)

```bash
bun install
cp .env.example .env

docker compose up -d db
bun run migrate

bun run dev
```

Then open:

- API: http://localhost:3000
- Swagger UI: http://localhost:3000/swagger
- Healthcheck: http://localhost:3000/health

## Scripts

| Command                                   | Description                                            |
| ----------------------------------------- | ------------------------------------------------------ |
| `bun run dev`                             | Start server in watch mode                             |
| `bun run start`                           | Start server (no watch)                                |
| `bun run migrate`                         | Run Drizzle SQL migrations from `./drizzle/migrations` |
| `bun run start:migrate`                   | Run migrations then start (used by Docker image)       |
| `bun test`                                | Unit tests (no DB required)                            |
| `bun run lint` / `bun run lint:fix`       | Lint with **oxlint**                                   |
| `bun run format` / `bun run format:check` | Format with **prettier**                               |

## Environment

Copy `.env.example` → `.env`.

- `DB_HOST`
- `DB_PORT` (optional, defaults to `5432`)
- `DB_USER`
- `DB_PASS`
- `DB_NAME`

`getDb()` fails fast with a clear error if any required env var is missing.

## Example: rate limiting (optional)

A tiny in-memory rate limiter plugin is included at `src/plugins/rateLimit.ts`.

```ts
import { rateLimit } from "./plugins/rateLimit";

app.use(rateLimit({ windowMs: 60_000, max: 60 }));
```

## Project docs

- Contributing: [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- Security: [`SECURITY.md`](./SECURITY.md)
- License: [`LICENSE`](./LICENSE)
