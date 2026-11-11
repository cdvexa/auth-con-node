import { Router } from 'express';
import { getProfile, createProfile } from '../controllers/profile.controller.js';

const profileRoutes = Router();

profileRoutes.get('/', getProfile)
profileRoutes.post('/create', createProfile);

export default profileRoutes;