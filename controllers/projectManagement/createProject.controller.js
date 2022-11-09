import { Project } from "../../models/project.model.js";

export const createProject = async (req, res, next) => {
    const { user_id, project_name, start_date, end_date } = req.body;

    await Project.create(req.body).then(() => {
        res.json({
            status: 'Project created'
        })
    })

}