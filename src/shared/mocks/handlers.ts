import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", (_req, res, ctx) => {
    return res(
      ctx.delay(1500),
      // Respond with a 200 status code
      ctx.status(404)
    );
  }),
];
