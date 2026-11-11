import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DB, process.env.USER_DB, process.env.PASS_DB, {
    host: process.env.HOST,
    dialect: 'mysql'

})

export default sequelize


