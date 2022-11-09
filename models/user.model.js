import { DataTypes } from "sequelize";
import { sequelize } from "../database/init.js";

export const User = sequelize.define('users', {
    name: DataTypes.TEXT,
    role: DataTypes.TEXT,
    team_leader: DataTypes.BOOLEAN,
    admin: DataTypes.BOOLEAN
}, { timestamps: false, createdAt: false, updatedAt: false });