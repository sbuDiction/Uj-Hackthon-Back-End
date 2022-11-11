import { Task } from "../../models/task.model.js"

export const viewTask = async (req, res, next) => {
    const { project_id } = req.params;
    console.log(req.params);
    const id = Number(project_id)
    await Task.findAll({
        where: {
            project_id: id
        }
    }).then(tasks => res.json({ tasks }))
}