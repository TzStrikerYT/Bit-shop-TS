import { Router } from "express";

import User from "./user.routes"
import Product from "./products.routes"

const router = Router()

// rutas del usuario
router.use("/user", User)
// rutas de los productos
router.use("/product", Product)

export default router