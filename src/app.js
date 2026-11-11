import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import usersRouters from "./routes/users.routes.js";
import authRouter from "./routes/auth.routes.js";
import profileRoutes from './routes/profile.routes.js'

//VALIDAR TOKEN
import { verifyToken } from './middleware/auth.middleware.js'

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Rutas
app.use('/api/v1/users', verifyToken, usersRouters);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/profile', verifyToken, profileRoutes)

export default app;