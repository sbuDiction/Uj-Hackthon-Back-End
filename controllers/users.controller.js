import { User } from "../models/user.model.js"

export const users = async (req, res, next) => {
    await User.findAll().then(users => {
        res.json({
            message: 'success',
            users
        })
    })
}