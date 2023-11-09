import Elysia from "elysia";
import { setup } from "./setup";

export const get_quote = new Elysia().use(setup).get(
  "/:id",
  async ({ params: { id }, set }) => {
    set.status = "OK";
    return {
      id,
      quote: "It's all done",
      author: "Limmy",
      source: "https://www.twitch.tv/Limmy",
    };
  },
  {
    type: "json",
    response: "quote",
    params: "intId",
  },
);
