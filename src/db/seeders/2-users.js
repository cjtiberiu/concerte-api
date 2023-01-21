'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('utilizatori', [
            {
                PRENUME: 'Admin',
                NUME: 'Test',
                EMAIL: 'admin@concerte.ro',
                PAROLA: bcrypt.hashSync('test', bcrypt.genSaltSync(10)),
                TIPUL_UTILIZATORULUI: 1,
                CREATED_AT: new Date(),
                UPDATED_AT: new Date(),
            },
            {
                PRENUME: 'User',
                NUME: 'Test',
                EMAIL: 'user@concerte.ro',
                PAROLA: bcrypt.hashSync('test', bcrypt.genSaltSync(10)),
                TIPUL_UTILIZATORULUI: 2,
                CREATED_AT: new Date(),
                UPDATED_AT: new Date(),
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('utilizatori', null, {});
    },
};
