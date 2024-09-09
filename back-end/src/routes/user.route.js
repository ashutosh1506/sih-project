import { Router } from "express";
import { Loginuser, RegisterUser } from "../controllers/user.controller.js";

const router=Router()


router.route("/signup").post(RegisterUser)
router.route("/login").post(Loginuser)

export default router 