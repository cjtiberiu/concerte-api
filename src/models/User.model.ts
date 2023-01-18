import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: any, Sequelize: any) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'ID',
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'FIRST_NAME',
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'LAST_NAME',
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
            field: 'PASSWORD',
        },
        contractStartDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'CONTACT_START_DATE',
        },
        contractEndDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'CONTRACT_END_DATE',
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
    });

    return User;
};