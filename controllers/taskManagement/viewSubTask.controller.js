import { SubTask } from "../../models/subtask.model.js";

export const viewSubTask = async (req, res, next) => {
    const { userId } = req.params;
    await SubTask.findAll({
        where: {
            user_id: userId
        }
    }).then(subTasks => {
        res.json({ subTasks })
    })
}