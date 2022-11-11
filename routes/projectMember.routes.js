import express from 'express';
import { viewTask } from '../controllers/projectMember/viewTask.controller.js';
import { viewMembers, viewMember, viewUserDetails } from '../controllers/projectMember/viewMembers.controller.js';

const projectMemberRoute = express.Router();


projectMemberRoute.get('/api/view/task', viewTask);
projectMemberRoute.get('/api/view/members', viewMembers);

projectMemberRoute.get('/api/view/member', viewMember);

projectMemberRoute.get('/api/get/member/:userId', viewUserDetails);


export {
    projectMemberRoute
}