import express from 'express';
import { createProject } from '../controllers/projectManagement/createProject.controller.js';
import { viewProject } from '../controllers/projectManagement/viewProject.controller.js';
import { viewTeamLeaders, viewProjectManager } from '../controllers/projectManagement/viewTeamLeasers.controller.js';


const projectManagementRoute = express.Router();


projectManagementRoute.post('/api/create/project', createProject);
projectManagementRoute.get('/api/view/projects', viewProject);
projectManagementRoute.get('/api/view/team/leaders', viewTeamLeaders);

projectManagementRoute.get('/api/view/project/manager/', viewProjectManager);

export {
    projectManagementRoute
}