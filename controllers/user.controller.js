import { User } from "../models/user.model.js"


export const user = async (req, res, next) => {
    const { userId } = req.body;
    await User.findOne({ where: { id: userId } })
        .then(async foundUser => {
            res.json({
                user: foundUser
            })
        })
}