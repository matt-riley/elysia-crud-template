# More secure base: official Bun image (no curl|bash install)
FROM oven/bun:1.3.8-slim

WORKDIR /app
ENV NODE_ENV=production

# Don't run git hooks / lifecycle scripts during image build
ENV HUSKY=0

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production --ignore-scripts

# Copy app source
COPY --chown=bun:bun . .

# Drop root
USER bun

EXPOSE 3000
CMD ["bun", "run", "start:migrate"]
