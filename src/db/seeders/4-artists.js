'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('artisti', [
            {
                NUME: 'Jamie Jones',
            },
            {
                NUME: 'Sven Vath',
            },
            {
                NUME: 'Seth Troxler',
            },
            {
                NUME: 'Dubfire',
            },
            {
                NUME: 'Marco Carola',
            },
            {
                NUME: 'Loco Dice',
            },
            {
                NUME: 'Hot Since 82',
            },
            {
                NUME: 'Solomun',
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('artisti', null, {});
    },
};
