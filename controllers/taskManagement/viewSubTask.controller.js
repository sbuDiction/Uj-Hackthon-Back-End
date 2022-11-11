import { Task } from "../../models/task.model.js";
import { SubTask } from "../../models/subtask.model.js";

export const viewSubTask = async (req, res, next) => {
    const { sub_task_id } = req.params;
    console.log(req.params);
    const taskId = Number(sub_task_id);
    console.log(taskId);
    await SubTask.findAll({
        where: {
            task_id: taskId
        }
    }).then(subTasks => {
        console.log(subTasks);
        res.json({ subTasks })
    })
}