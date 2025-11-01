import { Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/home.controllers";

router.get("/", controller.index);

export const homeRoutes: Router = router;