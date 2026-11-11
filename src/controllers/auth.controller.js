import { response, request } from "express";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config'

export const login = (async (req = request, res = response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email }
        })
        console.log(user)
        if (!user) {
            res.status(401).json({ message: "usuario o contraseña incorrecta" })
        }
        const verifyPass = bcrypt.compareSync(password, user.password);
        if (!verifyPass) {
            res.status(401).json({ message: "usuario o contraseña incorrecta" })
        }
        const payload = {
            id: user.id,
            email: user.email
        }
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
        res.status(200).json({ token })


    } catch (error) {
        res.status(500).json({ message: "error al iniciar sesión", error: error.message })
    }
})
