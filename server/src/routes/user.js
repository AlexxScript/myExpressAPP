import { Router } from "express";
import { createUser,logIn, logOut } from "../controllers/userController.js";

const router = Router();

router.post("/register",createUser);

router.post("/login",logIn);

router.post("/logout",logOut);


export default router;