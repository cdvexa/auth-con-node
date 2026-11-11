import { Router } from "express";
import { getAllUsers, createUser } from "../controllers/user.controller.js";

const usersRouters = Router();

usersRouters.get('/', getAllUsers);
usersRouters.post('/', createUser);

export default usersRouters