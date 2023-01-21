import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: any, Sequelize: any) => {
    const Ticket = sequelize.define(
        'ticket',
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
                defaultValue: 'user',
                field: 'TITLU',
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'PRET',
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
            tableName: 'bilete',
        }
    );

    return Ticket;
};
