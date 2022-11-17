import { SubTask } from "../../models/subtask.model.js";

export const viewSubTask = async (req, res, next) => {
    const { taskId } = req.params;
    console.log(req.params);
    await SubTask.findAll({
        where: {
            task_id: taskId
        }
    }).then(subtasks => {
        res.json({ subtasks })
    })
}

export const viewSubtaskById = async (req, res, next) => {
    const { subtaskId } = req.params;
    console.log(req.params);
    await SubTask.findAll({
        where: {
            id: subtaskId
        }
    }).then(subtasks => {
        res.json({ subtasks })
    })
}
