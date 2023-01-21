import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: any, Sequelize: any) => {
    const User = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'ID',
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'PRENUME',
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'NUME',
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'EMAIL',
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'PAROLA',
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: Sequelize.literal('NOW()'),
                field: 'CREATED_AT',
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: Sequelize.literal('NOW()'),
                field: 'UPDATED_AT',
            },
        },
        {
            freezeTableName: true,
            tableName: 'utilizatori',
        }
    );

    return User;
};