import { request, response } from 'express';
import Profile from "../models/profile.model.js";
import { randomUUID } from 'node:crypto';

export const getProfile = (async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const profile = await Profile.findByPk(id);
        if (!profile) {
            res.status(404).json({ message: "Perfil no encontrado" })
        }
        res.status(200).json(profile)

    } catch (error) {
        res.status(500).json({ message: "Error al obtener perfil", error: error.message })
    }
})

export const createProfile = (async (req = request, res = response) => {
    try {
        const profile = await Profile.create(req.body.id = randomUUID(), ...req.body)
        res.status(201).json({ message: "Perfil creado", profile })

    } catch (error) {
        res.status(500).json({ message: "Error al crear perfil", error: error.message })
    }
})