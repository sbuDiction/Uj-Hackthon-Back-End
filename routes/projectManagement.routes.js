import express from 'express';
import { createProject } from '../controllers/projectManagement/createProject.controller.js';

const projectManagementRoute = express.Router();


projectManagementRoute.post('/api/create/project', createProject);


export {
    projectManagementRoute
}