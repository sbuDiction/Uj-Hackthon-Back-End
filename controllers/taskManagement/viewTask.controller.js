import { Task } from "../../models/task.model.js"

export const viewTask = async (req, res, next) => {
    const { project_id } = req.params;
    console.log(req.params);
    await Task.findAll({
        where: {
            project_id: project_id
        }
    }).then(tasks => res.json({ tasks }))
}