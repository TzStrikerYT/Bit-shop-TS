import jwt from "jsonwebtoken"
import Express from "express"

// palabra clave
export const verifyToken = (req: Express.Request, res: Express.Response, next: any) => {

    try {

        const token = req.headers.authorization
        const secret = process.env.SECRET_KEY

        if(!token) throw "No hay token! >:c"
        if(!secret) throw "No hay llave secreta"

        const decoded = jwt.verify(token, secret)
        
        //req.login = decoded

        //envia al controlador o al siguiente middleware
        return next()
        
    } catch (error) {
        return res.status(401).json({error})
    }

}