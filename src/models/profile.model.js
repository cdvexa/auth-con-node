import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.model.js';
class Profile extends Model { }

export default Profile.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    whatsapp: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize
})

//Relacion uno a uno
User.hasOne(Profile);
Profile.belongsTo(User);

//Profile.sync({ alter: true })




