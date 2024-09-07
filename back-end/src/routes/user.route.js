import { Router } from "express";
import { Loginuser } from "../controllers/user.controller.js";

const router=Router()

router.route("/login").post(Loginuser)

export default router 