import express from 'express';
import { viewTask } from '../controllers/projectMember/viewTask.controller.js';
import { viewMembers } from '../controllers/projectMember/viewMembers.controller.js';

const projectMemberRoute = express.Router();


projectMemberRoute.get('/api/view/task', viewTask);
projectMemberRoute.get('/api/view/members', viewMembers);


export {
    projectMemberRoute
}