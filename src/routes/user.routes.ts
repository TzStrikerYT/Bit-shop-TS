import Express from "express";
import { Router } from "express";
import controllers from "../controllers";

const router = Router()

// crear un usuario
router.post("/create", controllers.User.createUser);
router.get("/getAll", controllers.User.getUsers)
router.put("/update", controllers.User.updateUser)
router.delete("/", () => {})

export default router