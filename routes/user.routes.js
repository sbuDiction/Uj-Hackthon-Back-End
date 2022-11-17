import express from 'express';
import { user } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/api/get/user', user);

export {
    userRouter
}

