import express from 'express';
import { createAccount } from '../controllers/createAccount.controller.js';

const createAccountRouter = express.Router();

createAccountRouter.post('/api/create/account', createAccount);

export {
    createAccountRouter
}

