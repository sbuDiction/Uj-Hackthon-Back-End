import { Task } from "../../models/task.model.js"


export const createTask = async (req, res, next) => {
    const { project_id, user_id, task_name, start_date, end_date } = req.body;

    console.log(req.body);
    await Task.create(req.body).then(() => {
        res.json({
            status: 'Task created'
        })
    })
}