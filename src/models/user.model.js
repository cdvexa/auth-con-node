import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class User extends Model { }

export default User.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize
})

//User.sync({ force: true })