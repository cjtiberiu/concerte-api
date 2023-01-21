import { Sequelize, DataTypes } from 'sequelize';
//const User = require('./User.model');

module.exports = (sequelize: any, Sequelize: any) => {
    const UserType = sequelize.define(
        'user_type',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'ID',
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'user',
                field: 'TIP',
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'tipuri_utilizatori',
        }
    );

    return UserType;
};