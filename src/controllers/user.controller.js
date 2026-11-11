import { response, request } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import { randomUUID } from 'node:crypto'

export const getAllUsers = (async (req = request, res = response) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message })
    }
})

export const createUser = (async (req = request, res = response) => {
    try {
        const { email, password } = req.body
        const hashPass = bcrypt.hashSync(password, 10)
        const user = await User.create({ id: randomUUID(), email, password: hashPass })
        res.status(201).json({ message: 'usuario creado con éxito', user })
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message })
    }
})