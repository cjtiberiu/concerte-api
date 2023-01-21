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
            stock: {
                type: DataTypes.INTEGER,
                field: 'STOC',
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
