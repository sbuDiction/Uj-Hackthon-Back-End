import express from 'express';
import { auth } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/api/auth', auth);

export {
    authRouter
}

