FROM debian:11.8-slim as builder
WORKDIR /app

RUN apt update
RUN apt install curl unzip -y

RUN curl https://bun.sh/install | bash

FROM gcr.io/distroless/base as release
WORKDIR /app

COPY --from=builder /root/.bun/bin/bun bun
COPY src src

ENV NODE_ENV production
CMD ["./bun", "src/index.ts"]

EXPOSE 3000
