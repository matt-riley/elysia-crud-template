import { t } from "elysia";

export { quotes, quote } from "./quote";
export const numeric_id = t.Object({
  id: t.Numeric(),
});
