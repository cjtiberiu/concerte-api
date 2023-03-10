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
db.states = require('./State.model.js')(sequelize, Sequelize);
db.tickets = require('./Ticket.model')(sequelize, Sequelize);

db.users.belongsTo(db.userTypes, {
    foreignKey: {
        name: 'userType',
        field: 'TIPUL_UTILIZATORULUI',
        allowNull: false,
        defaultValue: 2,
    },
    targetKey: 'id',
    uniqueKey: 'user_type_fk',
});
db.userTypes.hasMany(db.users, {
    foreignKey: {
        name: 'userType',
        field: 'TIPUL_UTILIZATORULUI',
        allowNull: false,
        defaultValue: 2,
    },
});
db.events.belongsTo(db.artists, {
    foreignKey: {
        name: 'eventArtist',
        field: 'ARTIST_EVENIMENT',
        allowNull: false,
    },
    targetKey: 'id',
    uniqueKey: 'event_artist_fk',
});
db.artists.hasMany(db.events, {
    foreignKey: {
        name: 'eventArtist',
        field: 'ARTIST_EVENIMENT',
        allowNull: false,
    },
});
db.orders.belongsTo(db.users, {
    foreignKey: {
        name: 'userID',
        field: 'ID_UTILIZATOR',
        allowNull: false,
    },
    targetKey: 'id',
    uniqueKey: 'order_user_fk',
});
db.users.hasMany(db.orders, {
    foreignKey: {
        name: 'userID',
        field: 'ID_UTILIZATOR',
        allowNull: false,
    },
});
db.orders.belongsTo(db.events, {
    foreignKey: {
        name: 'eventID',
        field: 'ID_EVENIMENT',
        allowNull: false,
    },
    targetKey: 'id',
    uniqueKey: 'order_user_fk',
});
db.events.hasMany(db.orders, {
    foreignKey: {
        name: 'eventID',
        field: 'ID_EVENIMENT',
        allowNull: false,
    },
});
db.events.belongsTo(db.states, {
    foreignKey: {
        name: 'stateID',
        field: 'ID_JUDET',
        allowNull: false,
    },
    targetKey: 'id',
    uniqueKey: 'order_user_fk',
});
db.states.hasMany(db.events, {
    foreignKey: {
        name: 'stateID',
        field: 'ID_JUDET',
        allowNull: false,
    },
});
db.tickets.belongsTo(db.orders, {
    foreignKey: {
        name: 'orderID',
        field: 'ID_COMANDA',
        allowNull: false,
    },
    targetKey: 'id',
    uniqueKey: 'ticket_order_fk',
})
db.orders.hasMany(db.tickets, {
    foreignKey: {
        name: 'orderID',
        field: 'ID_COMANDA',
        allowNull: false,
    },
});

module.exports = db;