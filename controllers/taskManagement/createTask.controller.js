import { Task } from "../../models/task.model.js"


export const createTask = async (req, res, next) => {
    const { task_name } = req.body;

    console.log(req.body);
    await Task.findOne({ where: { task_name: task_name } }).then(async task => {
        if (!task) await Task.create(req.body).then(() => {
            res.json({
                message: 'Task has been successfuly created',
                isCreated: true,
                alertType: 'green-400'
            })
        })
        else res.json({
            message: 'Task already exists try creating a new task',
            isCreated: false,
            alertType: 'blue-400'
        })
    })


}