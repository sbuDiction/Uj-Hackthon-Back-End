import { DataTypes } from "sequelize";
import { sequelize } from "../database/init.js";

export const SubTask = sequelize.define('subtasks', {
    task_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    sub_task_name: DataTypes.TEXT,
    start_date: DataTypes.TEXT,
    end_date: DataTypes.TEXT
},{ timestamps: false, createdAt: false, updatedAt: false });