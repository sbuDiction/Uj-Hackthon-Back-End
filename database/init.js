import { Sequelize } from 'sequelize';


// database set up
export const sequelize = new Sequelize('workflow', 'user', 'pass', {
    dialect: 'sqlite',
    host: 'temp/workflow.sqlite'
});