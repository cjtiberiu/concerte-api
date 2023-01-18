'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [
            {
                FIRST_NAME: 'Admin',
                LAST_NAME: 'Test',
                EMAIL: 'admin@genesis.com',
                PASSWORD: bcrypt.hashSync('test', bcrypt.genSaltSync(10)),
                USER_TYPE: 1,
                CREATED_AT: new Date(),
                UPDATED_AT: new Date(),
            },
            {
                FIRST_NAME: 'User',
                LAST_NAME: 'Test',
                EMAIL: 'user@genesis.com',
                PASSWORD: bcrypt.hashSync('test', bcrypt.genSaltSync(10)),
                USER_TYPE: 2,
                CREATED_AT: new Date(),
                UPDATED_AT: new Date(),
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    },
};
