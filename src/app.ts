import Express from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/index"
import { connectDB } from "./database"

//CREAR INSTANCIA DE EXPRESS
const app = Express();

// traer el puerto de las variables de entorno
dotenv.config();

//conexion a la BD
connectDB()

//establecer el puerto en el cual se ejecuta el api
const port = process.env.PORT || 3200;

//establecer usos de express
app.use(Express.json());

// Global de las rutas a utilizar en el api
app.use("/api", apiRoutes)

// ejecuccion del api
app.listen(port, () => console.log(`api is running in port ${port}`));
