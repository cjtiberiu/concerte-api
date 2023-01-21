import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: any, Sequelize: any) => {
    const State = sequelize.define(
        'state',
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
                field: 'NUME',
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'judete',
        }
    );

    return State;
};
