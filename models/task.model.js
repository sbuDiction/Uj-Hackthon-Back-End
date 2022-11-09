import { DataTypes } from "sequelize";
import { sequelize } from "../database/init";

export const User = sequelize.define('task',{
    user_id:DataTypes.INTEGER,  
    task_name:DataTypes.TEXT,
    start_date:DataTypes.TEXT,
    end_date:DataTypes.TEXT
});
