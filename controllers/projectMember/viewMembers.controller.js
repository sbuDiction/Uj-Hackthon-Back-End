import { User } from "../../models/user.model.js"


export const viewMembers = async (req, res, next) => {
    await User.findAll({
        where: {
            team_leader: false,
            admin: false
        }
    }).then(members => {
        res.json({
            members
        })
    })
}