import { DataTypes } from "sequelize";
import { sequelize } from "../database/init.js";

export const Project = sequelize.define('projects', {
    user_id: DataTypes.INTEGER,
    project_name: DataTypes.TEXT,
    start_date: DataTypes.TEXT,
    end_date: DataTypes.TEXT

},{ timestamps: false, createdAt: false, updatedAt: false });