import { Router } from "express";
import { createUser,logIn } from "../controllers/UserController.js";

const router = Router();

router.post("/register",createUser);

router.post("/login",logIn);

router.post("/signout",(req,res) => {
    res.json({message:"create users"});
});

export default router;