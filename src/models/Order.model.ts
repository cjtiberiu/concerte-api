import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: any, Sequelize: any) => {
    const Order = sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'ID',
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'QUANTITY',
        },
        totalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'TOTAL_AMOUNT',
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

    return Order;
};
