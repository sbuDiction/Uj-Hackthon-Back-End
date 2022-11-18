import { User } from "../../models/user.model.js"


export const viewTeamLeaders = async (req, res, next) => {
    await User.findAll({
        where: {
            team_leader: true,
            admin: false
        }
    }).then(members => {
        res.json({
            teamLeaders: members
        })
    })
}

export const viewProjectManager = async (req, res) => {
    await User.findAll({
        where: {
            id: 8
        }
    }).then(leader => {
        res.json({
            leader
        })
    })
}