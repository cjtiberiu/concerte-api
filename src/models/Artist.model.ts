import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: any, Sequelize: any) => {
    const Artist = sequelize.define('artist', {
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

    return Artist;
};
