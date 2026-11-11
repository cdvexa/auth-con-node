import { request, response } from 'express';
import Profile from "../models/profile.model.js";
import { randomUUID } from 'node:crypto';

export const getProfile = (async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const profile = await Profile.findByPk(id);
        if (!profile) {
            return res.status(404).json({ message: "Perfil no encontrado" })
        }
        return res.status(200).json(profile)

    } catch (error) {
        return res.status(500).json({ message: "Error al obtener perfil", error: error.message })
    }
})

export const createProfile = (async (req = request, res = response) => {
    try {

        const { name, lastName, phone, whatsapp, UserId } = req.body

        const newProfile = {
            id: randomUUID(),
            name,
            lastName,
            phone,
            whatsapp,
            UserId
        }

        const profile = await Profile.create(newProfile)
        return res.status(201).json({ message: "Perfil creado", profile })

    } catch (error) {
        return res.status(500).json({ message: "Error al crear perfil", error: error.message })
    }
})