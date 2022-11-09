import { DataTypes } from "sequelize";
import { sequelize } from "../database/init";

export const User = sequelize.define('user',{
    user_id:DataTypes.INTEGER,
    project_name:DataTypes.TEXT, 
    start_date:DataTypes.TEXT,
    end_date:DataTypes.TEXT 

});