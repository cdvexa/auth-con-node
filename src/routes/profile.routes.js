import { Router } from 'express';
import { getProfile, createProfile } from '../controllers/profile.controller.js';

const profileRoutes = Router();

profileRoutes.get('/:id', getProfile)
profileRoutes.post('/', createProfile);

export default profileRoutes;