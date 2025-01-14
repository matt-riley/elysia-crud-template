FROM debian:12.9-slim as builder
WORKDIR /app

RUN apt update
RUN apt install curl unzip -y

RUN curl https://bun.sh/install | bash

FROM debian:12.9-slim as release
WORKDIR /app

COPY --from=builder /root/.bun/bin/bun bun
COPY . .

RUN ./bun install

ENV NODE_ENV production
CMD ["./bun", "run", "start"]

EXPOSE 3000
