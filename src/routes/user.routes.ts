import Express from "express";
import { Router } from "express";
import controllers from "../controllers";
import { verifyToken } from "../middlewares/auth";

const router = Router()

// crear un usuario
router.post("/create", controllers.User.createUser);
router.get("/getAll", verifyToken, controllers.User.getUsers)
router.put("/update", controllers.User.updateUser)
router.delete("/delete/:_id", controllers.User.deleteUser)
router.post("/login", controllers.User.login)

export default router