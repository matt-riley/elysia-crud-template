FROM debian:13.2-slim as builder
WORKDIR /app

RUN apt update
RUN apt install curl unzip -y

RUN curl https://bun.sh/install | bash

FROM debian:13.2-slim as release
WORKDIR /app

COPY --from=builder /root/.bun/bin/bun /usr/local/bin/bun
COPY . .

RUN bun install

ENV NODE_ENV production
CMD ["bun", "run", "start:migrate"]

EXPOSE 3000
