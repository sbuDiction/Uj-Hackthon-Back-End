import { DataTypes } from "sequelize";
import { sequelize } from "../database/init";

export const User = sequelize.define('project',{
name:DataTypes.TEXT, 
role:DataTypes.TEXT,
team_leader:DataTypes.BOOLEAN, 
admin:DataTypes.BOOLEAN 
});