import { Router } from "express";

import { authenticatedRoutes } from "./authenticated.routes";

const router = Router();

router.use(authenticatedRoutes);

export { router };
