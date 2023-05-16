import Express from "express";
import { Router } from "express";
import controllers from "../controllers";

const router = Router()

// crear un usuario
router.post("/create", controllers.User.createUser);
router.post("/login", controllers.User.login)

export default router