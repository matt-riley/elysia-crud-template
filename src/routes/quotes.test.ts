import { beforeEach, describe, expect, test } from "bun:test";
import { Elysia } from "elysia";
import { injectDb } from "../db";
import type { DbClient } from "../db";
import { createMockDb } from "../test/mockDb";
import * as routes from "./index";

let mockDb: ReturnType<typeof createMockDb>;

const buildApp = () =>
  new Elysia().group("/quotes", (app) =>
    app
      .use(routes.get_quote)
      .use(routes.get_quotes)
      .use(routes.add_quote)
      .use(routes.delete_quote)
      .use(routes.update_quote),
  );

const baseUrl = "http://localhost";
const initialQuotes = [
  { id: 1, quote: "Stay hungry, stay foolish.", author: "Steve Jobs", source: "Stanford" },
  { id: 2, quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman", source: "Novel" },
];

beforeEach(() => {
  mockDb = createMockDb();
  injectDb(mockDb as unknown as DbClient);
  mockDb.reset(initialQuotes);
});

describe("quotes routes", () => {
  test("returns all quotes", async () => {
    const app = buildApp();
    const response = await app.handle(new Request(`${baseUrl}/quotes`));
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual(initialQuotes);
  });

  test("returns a single quote by id", async () => {
    const app = buildApp();
    const response = await app.handle(new Request(`${baseUrl}/quotes/2`));
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual(initialQuotes[1]);
  });

  test("returns 404 for a missing quote", async () => {
    const app = buildApp();
    const response = await app.handle(new Request(`${baseUrl}/quotes/999`));
    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({ message: "Quote not found" });
  });

  test("adds a new quote", async () => {
    const app = buildApp();
    const newQuote = {
      quote: "Programs must be written for people to read.",
      author: "Harold Abelson",
      source: "SICP",
    };

    const createResponse = await app.handle(
      new Request(`${baseUrl}/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuote),
      }),
    );

    expect(createResponse.status).toBe(200);
    const created = await createResponse.json();
    expect(created).toEqual({ id: 3 });

    const listResponse = await app.handle(new Request(`${baseUrl}/quotes`));
    const list = await listResponse.json();
    expect(list).toEqual([...initialQuotes, { ...newQuote, id: 3 }]);
  });

  test("updates an existing quote", async () => {
    const app = buildApp();
    const updatedQuote = { ...initialQuotes[0], quote: "Stay hungry, stay curious." };

    const updateResponse = await app.handle(
      new Request(`${baseUrl}/quotes`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedQuote),
      }),
    );

    expect(updateResponse.status).toBe(200);
    await expect(updateResponse.json()).resolves.toEqual({ id: updatedQuote.id });

    const getUpdatedResponse = await app.handle(new Request(`${baseUrl}/quotes/${updatedQuote.id}`));
    await expect(getUpdatedResponse.json()).resolves.toMatchObject(updatedQuote);

    // Ensure other quotes were not modified.
    const getOtherResponse = await app.handle(new Request(`${baseUrl}/quotes/2`));
    await expect(getOtherResponse.json()).resolves.toEqual(initialQuotes[1]);
  });

  test("returns 404 when updating a missing quote", async () => {
    const app = buildApp();
    const updateResponse = await app.handle(
      new Request(`${baseUrl}/quotes`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 999,
          quote: "nope",
          author: "n/a",
          source: "n/a",
        }),
      }),
    );

    expect(updateResponse.status).toBe(404);
    await expect(updateResponse.json()).resolves.toEqual({ message: "Quote not found" });
  });

  test("rejects update without id", async () => {
    const app = buildApp();
    const updateResponse = await app.handle(
      new Request(`${baseUrl}/quotes`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quote: "missing id",
          author: "n/a",
          source: "n/a",
        }),
      }),
    );

    expect(updateResponse.status).toBeGreaterThanOrEqual(400);
  });

  test("deletes a quote", async () => {
    const app = buildApp();

    const deleteResponse = await app.handle(
      new Request(`${baseUrl}/quotes/1`, {
        method: "DELETE",
      }),
    );

    expect(deleteResponse.status).toBe(200);
    await expect(deleteResponse.json()).resolves.toEqual({ id: 1 });

    const listResponse = await app.handle(new Request(`${baseUrl}/quotes`));
    const list = await listResponse.json();
    expect(list.find((quote: { id: number }) => quote.id === 1)).toBeUndefined();
  });

  test("returns 404 when deleting a missing quote", async () => {
    const app = buildApp();

    const deleteResponse = await app.handle(
      new Request(`${baseUrl}/quotes/999`, {
        method: "DELETE",
      }),
    );

    expect(deleteResponse.status).toBe(404);
    await expect(deleteResponse.json()).resolves.toEqual({ message: "Quote not found" });
  });

  test("rejects invalid create payload", async () => {
    const app = buildApp();

    const createResponse = await app.handle(
      new Request(`${baseUrl}/quotes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author: "only" }),
      }),
    );

    expect(createResponse.status).toBeGreaterThanOrEqual(400);
  });
});
