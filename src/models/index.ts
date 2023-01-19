const dbConfig = require('../config/db.config.js');

interface IDBObject {
    [key: string]: any;
}

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db: IDBObject = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userTypes = require('./User_type.model.js')(sequelize, Sequelize);
db.users = require('./User.model.js')(sequelize, Sequelize);
db.artists = require('./Artist.model')(sequelize, Sequelize);
db.events = require('./Event.model')(sequelize, Sequelize);
db.orders = require('./Order.model')(sequelize, Sequelize);
db.countries = require('./Country.model.js')(sequelize, Sequelize);

db.users.belongsTo(db.userTypes, {
    foreignKey: {
        name: 'userType',
        field: 'USER_TYPE',
        allowNull: false,
        defaultValue: 2,
    },
    targetKey: 'id',
    uniqueKey: 'user_type_fk',
});
db.userTypes.hasMany(db.users, {
    foreignKey: {
        name: 'userType',
        field: 'USER_TYPE',
        allowNull: false,
        defaultValue: 2,
    },
});
db.events.belongsTo(db.artists, {
    foreignKey: {
        name: 'eventArtist',
        field: 'EVENT_ARTIST',
        allowNull: false,
    },
    targetKey: 'id',
    uniqueKey: 'event_artist_fk',
});
db.artists.hasMany(db.events, {
    foreignKey: {
        name: 'eventArtist',
        field: 'EVENT_ARTIST',
        allowNull: false,
    },
});
db.orders.belongsTo(db.users, {
    foreignKey: {
        name: 'userID',
        field: 'USER_ID',
        allowNull: false,
    },
    targetKey: 'id',
    uniqueKey: 'order_user_fk',
});
db.users.hasMany(db.orders, {
    foreignKey: {
        name: 'userID',
        field: 'USER_ID',
        allowNull: false,
    },
});
db.orders.belongsTo(db.events, {
    foreignKey: {
        name: 'orderID',
        field: 'ORDER_ID',
        allowNull: false,
    },
    targetKey: 'id',
    uniqueKey: 'order_user_fk',
});
db.events.hasMany(db.orders, {
    foreignKey: {
        name: 'orderID',
        field: 'ORDER_ID',
        allowNull: false,
    },
});

module.exports = db;