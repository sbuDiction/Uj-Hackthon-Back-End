import express from 'express';
import { users } from '../controllers/users.controller.js';

const usersRouter = express.Router();

usersRouter.get('/api/get/users', users);

export {
    usersRouter
}

