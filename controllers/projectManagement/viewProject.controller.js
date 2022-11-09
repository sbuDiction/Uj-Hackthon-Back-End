import { Project } from "../../models/project.model.js"


export const viewProject = async (req, res, next) => {
    await Project.findAll().then(projects => {
        res.json({
            message: 'success',
            projects
        })
    })
}