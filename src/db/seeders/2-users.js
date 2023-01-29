'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('utilizatori', [
            {
                PRENUME: 'User',
                NUME: 'Admin',
                EMAIL: 'admin@concerte.ro',
                PAROLA: bcrypt.hashSync('test', bcrypt.genSaltSync(10)),
                TIPUL_UTILIZATORULUI: 1,
                CREATED_AT: new Date(),
                UPDATED_AT: new Date(),
            },
            {
                PRENUME: 'Utilizator',
                NUME: 'Unu',
                EMAIL: 'user1@concerte.ro',
                PAROLA: bcrypt.hashSync('test', bcrypt.genSaltSync(10)),
                TIPUL_UTILIZATORULUI: 2,
                CREATED_AT: new Date(),
                UPDATED_AT: new Date(),
            },
            {
                PRENUME: 'utilizator',
                NUME: 'Doi',
                EMAIL: 'utilizator2@concerte.ro',
                PAROLA: bcrypt.hashSync('test', bcrypt.genSaltSync(10)),
                TIPUL_UTILIZATORULUI: 2,
                CREATED_AT: new Date(),
                UPDATED_AT: new Date(),
            },
            {
                PRENUME: 'Utilizator',
                NUME: 'Trei',
                EMAIL: 'utilizator3@concerte.ro',
                PAROLA: bcrypt.hashSync('test', bcrypt.genSaltSync(10)),
                TIPUL_UTILIZATORULUI: 2,
                CREATED_AT: new Date(),
                UPDATED_AT: new Date(),
            },
            {
                PRENUME: 'Utilizator',
                NUME: 'Patru',
                EMAIL: 'utilizator4@concerte.ro',
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
