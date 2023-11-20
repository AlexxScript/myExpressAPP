import { Router } from "express";
import { getHome } from "../controllers/homeController.js";
import { authToken } from "../middlewares/authToken.js";

const router = Router();

router.get("/", authToken, getHome);

export default router;