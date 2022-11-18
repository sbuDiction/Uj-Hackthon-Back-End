import { Project } from "../../models/project.model.js";

export const createProject = async (req, res, next) => {
    const { project_name } = req.body;
    await Project.findOne({ where: { project_name: project_name } })
        .then(async project => {
            if (!project) await Project.create(req.body).then(() => {
                res.json({
                    message: 'Project has been successfuly created',
                    isCreated: true,
                    alertType: 'green-400'
                })
            })
            else res.json({
                message: 'Project already exists try creating a new project',
                isCreated: false,
                alertType: 'blue-400'
            })
        })


}