import { SubTask } from "../../models/subtask.model.js"


export const createSubTask = async (req, res, next) => {
    const { task_id, user_id, sub_task_name, start_date, end_date } = req.body;

    await SubTask.create(req.body).then(() => {
        res.json({
            status: 'SubTask created'
        })
    })
}