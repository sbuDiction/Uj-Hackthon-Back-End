import express from 'express';
import { createTask } from '../controllers/taskManagement/createTask.controller.js';
import { createSubTask } from '../controllers/taskManagement/createSubTask.controller.js';
import { removeTask } from '../controllers/taskManagement/removeTask.controller.js';
import { assignTask } from '../controllers/taskManagement/assignTask.controller.js';
import { grantTaskAccess } from '../controllers/taskManagement/grantTaskAccess.controller.js';

const taskManagementRoute = express.Router();

// endpoints
taskManagementRoute.post('/api/create/task', createTask);
taskManagementRoute.post('/api/create/sub/task', createSubTask);
taskManagementRoute.post('/api/remove/task', removeTask);
taskManagementRoute.post('/api/assign/task', assignTask);
taskManagementRoute.post('/api/grant/task/access', grantTaskAccess);


export {
    taskManagementRoute
}