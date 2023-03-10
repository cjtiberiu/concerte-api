import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: any, Sequelize: any) => {
    const Artist = sequelize.define(
        'artist',
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
            tableName: 'artisti',
        }
    );

    return Artist;
};
