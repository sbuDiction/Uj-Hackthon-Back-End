import express from 'express';
import { viewTask } from '../controllers/projectMember/viewTask.controller';

const projectMemberRoute = express.Router();


projectMemberRoute.post('/api/view/task', viewTask);


export {
    projectMemberRoute
}