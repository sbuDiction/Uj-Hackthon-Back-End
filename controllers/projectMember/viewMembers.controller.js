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

export const viewMember = async (req, res) => {
    console.log('viewing');
    await User.findAll({
        where: {
            id: 3
        }
    }).then(member => {
        res.json({
            member
        })
    })
}

export const viewUserDetails = async (req, res) => {
    const { userId } = req.params;
    const id = Number(userId);
    await User.findAll({
        where: {
            id: id
        }
    }).then(member => {
        res.json({
            member
        })
    })
}