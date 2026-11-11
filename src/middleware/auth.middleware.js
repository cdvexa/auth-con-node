import { request, response } from 'express';
import jwt from "jsonwebtoken";
import 'dotenv/config'


export const verifyToken = async (req = request, res = response, next) => {

    const authHeader = req.get('Authorization');
    console.log(authHeader)

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Token no es valido" })
    }

    const token = authHeader.split(' ')[1];

    try {
        const secret = jwt.verify(token, process.env.SECRET)
        if (!secret) {
            return res.status(401).json({ message: "Token no es valido" })
        }
        next()


    } catch (error) {
        return res.status(500).json({ message: "Error validando Token" })
    }

    //next()
}

