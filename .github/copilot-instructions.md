# Copilot coding agent instructions (elysia-crud-template)

## Repository summary
This is a small Bun + TypeScript API template built with **Elysia** (HTTP server) and **Drizzle ORM** backed by **MySQL**. It exposes CRUD endpoints for a `quotes` table and includes Bun tests that run fully in-memory via a mock DB.

## Tech stack / runtimes
- Runtime: **Bun** (validated locally: `bun --version` → **1.3.5**)
- Language: **TypeScript** (devDependency: `typescript@5.9.3`)
- Web framework: **Elysia** (+ `@elysiajs/swagger`)
- DB/ORM: **drizzle-orm** + **mysql2**
- Migrations: Drizzle migrator reading SQL from `./drizzle/migrations`

## Project layout (where to change things)
Repo root (important files):
- `package.json` – Bun scripts
- `tsconfig.json` – TS config (no emit)
- `docker-compose.yml` + `docker/Dockerfile` – container setup
- `drizzle.config.ts` – drizzle-kit config (used by drizzle-kit, not required for tests)
- `.env.example` – example DB environment (shell-export format)
- `drizzle/migrations/*.sql` – migration SQL

Source:
- `src/index.ts` – app entrypoint; mounts Swagger + routes and listens on **:3000**
- `src/routes/*.ts` – route modules; `src/routes/index.ts` re-exports them
- `src/routes/setup.ts` – shared Elysia plugin providing:
  - `.model(...)` schemas from `src/types/*`
  - `.derive(async () => ({ db: await getDb() }))` for DB access
- `src/db/index.ts` – DB wiring:
  - `getDb()` reads `DB_HOST/DB_USER/DB_PASS/DB_NAME`
  - `injectDb()` lets tests swap in a mock
- `src/db/migrate.ts` – runs migrations and closes the connection
- `src/test/mockDb.ts` – in-memory Drizzle-like adapter used by tests

## Build / validate (commands that work)
### Bootstrap (always do this first)
```bash
bun install
```
Validated.

### Tests (fastest validation)
```bash
bun test
```
Validated (10 tests pass). These tests do **not** require a database.

### Lint
No linter is configured in this repo (no `lint` script).

### Type-check / build
There is **no** `build` script and TS is configured with `noEmit: true`.

A plain typecheck currently **fails**:
```bash
bunx tsc --noEmit
```
Observed failures include `drizzle.config.ts` `Config` typing and a `drizzle(connection)` typing mismatch in `src/db/index.ts`. Do not add a CI gate on `tsc` unless you intend to fix these errors.

### CI / GitHub Actions
There is currently **no** `.github/workflows/*` in this repository, so there are no repo-defined CI checks beyond what you run locally (recommendation: `bun test`).

## Running locally
### Dev server (watch mode)
```bash
bun run dev
```
Notes:
- The server can start without a DB, but the first request that hits a route will attempt to connect via `getDb()`.
- Default port is **3000** (`src/index.ts`).

### Start script caveat (important)
`package.json` defines:
- `prestart`: `./bun src/db/migrate.ts`
- `start`: `./bun src/index.ts`

On a fresh local checkout, `./bun` does **not** exist, so:
```bash
bun run start
```
fails with: `./bun: No such file or directory`.

Workaround for local runs:
```bash
bun src/index.ts
# and (if needed) run migrations explicitly:
bun src/db/migrate.ts
```

## Database & migrations
### Required env vars
The DB connection uses:
- `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`

`.env.example` is **shell-export format** (lines start with `export`). To use it in a shell:
```bash
source .env.example
```

If you want Docker Compose to automatically load env vars, note that Compose’s `.env` format is typically `KEY=value` (no `export`).

### Migrations
- Migration runner: `src/db/migrate.ts`
- Migration files: `drizzle/migrations/*.sql`

## Docker
- `docker/Dockerfile` installs Bun and runs `./bun run start` inside the image.
- `docker-compose.yml` defines `db` (MySQL) and `api` services.

If your environment doesn’t have Docker available, you can still run unit tests (`bun test`) since they use the mock DB.

## How to work efficiently in this repo
- Prefer validating changes with `bun test` first (fast, deterministic, no DB).
- When modifying handlers, start in `src/routes/*.ts` and ensure they `.use(setup)` so `db` is available.
- Before claiming a task is finished, **always do a full code review** of your changes (diff + check for edge cases) and ensure tests still pass.
- Only search the codebase if the information in this file is incomplete or contradicted by the current repo state.

## Quick reference (repo inventory)
### Repo root files (current)
- `README.md`
- `.env.example`
- `package.json`
- `bun.lockb`
- `tsconfig.json`
- `docker-compose.yml`
- `drizzle.config.ts`
- `docker/`
- `drizzle/`
- `src/`
- `node_modules/` (checked in locally; not relevant to repo logic)

### README.md (current contents)
- Template is “Elysia with Bun runtime”.
- Dev server: `bun run dev`
- Default URL: `http://localhost:3000/`
