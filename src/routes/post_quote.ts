import { Context, t } from "elysia";

export const post_quote = ({ body }: Context) => {
  console.log(body);
};
