import { Router } from "express";

const authenticatedRoutes = Router();

authenticatedRoutes.post("/auth", (request, response) => {
  return response.status(201).send();
});

export { authenticatedRoutes };
