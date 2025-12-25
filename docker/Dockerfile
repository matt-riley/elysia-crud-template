# More secure base: official Bun image (no curl|bash install)
FROM oven/bun:1.3.5-slim

WORKDIR /app
ENV NODE_ENV=production

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

# Copy app source
COPY --chown=bun:bun . .

# Drop root
USER bun

EXPOSE 3000
CMD ["bun", "run", "start:migrate"]
