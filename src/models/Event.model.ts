import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: any, Sequelize: any) => {
    const Event = sequelize.define('event', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'ID',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
            field: 'NAME',
        },
        ticketPrice: {
            type: DataTypes.INTEGER,
            field: 'TICKET_PRICE',
        },
        eventDate: {
            type: DataTypes.DATE,
            field: 'EVENT_DATE',
        },
        stock: {
            type: DataTypes.INTEGER,
            field: 'STOCK',
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

    return Event;
};
