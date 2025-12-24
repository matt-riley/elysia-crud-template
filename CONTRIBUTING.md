# Contributing

Thanks for taking the time to contribute!

## Development

### Prerequisites

- [Bun](https://bun.sh/) (recommended)
- Optional: Docker (for running Postgres locally)

### Setup

```bash
bun install
cp .env.example .env
```

### Tests

```bash
bun test
```

### Lint / Format

```bash
bun run lint
bun run format:check
```

To apply fixes/formatting:

```bash
bun run lint:fix
bun run format
```

## Pull Requests

- Keep PRs focused and small.
- Include tests for behavior changes when practical.
- Ensure CI is green (`bun test`).

## Reporting Bugs / Requesting Features

- Bugs: please include reproduction steps and expected vs actual behavior.
- Features: describe the use-case and any proposed API/behavior.
