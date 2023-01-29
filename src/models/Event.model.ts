import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: any, Sequelize: any) => {
    const Event = sequelize.define(
        'event',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                field: 'ID',
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'TITLU',
            },
            ticketPrice: {
                type: DataTypes.INTEGER,
                field: 'PRETUL_BILETULUI',
            },
            eventDate: {
                type: DataTypes.DATE,
                field: 'DATA_EVENIMENTULUI',
            },
            initialStock: {
                type: DataTypes.INTEGER,
                field: 'STOC_INITIAL',
            },
            currentStock: {
                type: DataTypes.INTEGER,
                field: 'STOC_CURENT',
            },
            displayImage: {
                type: DataTypes.STRING,
                field: 'IMAGINE',
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
            tableName: 'evenimente',
        }
    );

    return Event;
};
