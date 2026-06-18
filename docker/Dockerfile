# === Production Dockerfile for Elysia + Drizzle + Postgres ===
#
# Uses multi-stage build with the official Bun slim image.
# For an even smaller deployment, you can optionally compile to a
# standalone binary (see Elysia deploy docs). That requires running
# migrations separately before deploying the binary.

FROM oven/bun:1.3.14-slim AS base
WORKDIR /app
ENV NODE_ENV=production
ENV HUSKY=0

# --- Deps layer (cacheable) ---
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production --ignore-scripts

# --- Final image ---
FROM base
COPY --from=deps /app/node_modules ./node_modules
COPY --chown=bun:bun . .

USER bun
EXPOSE 3000

# Run migrations then start the server
CMD ["bun", "run", "start:migrate"]
