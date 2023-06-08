import Express from "express";
import { Router } from "express";
import controllers from "../controllers";
import upload from "../middlewares/multer";

const router = Router()

router.get("/getproducts", controllers.Product.getProducts)
router.post("/createProduct", controllers.Product.createProduct)
router.put("/updateProduct", controllers.Product.updateProduct)
router.delete("/deleteProduct/:_id", controllers.Product.deleteProduct)

// subir archivo
router.post("/upload", upload.single('file'), controllers.Product.uploadImageProduct)

export default router