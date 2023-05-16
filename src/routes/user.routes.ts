import Express from "express";
import { Router } from "express";

const router = Router()

// crear un usuario
router.post("/create", (req: Express.Request, res: Express.Response) => {
  res.status(201).json({msg: "usuario creado"})
});

export default router