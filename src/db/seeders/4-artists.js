'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('artisti', [
            {
                NUME: 'Red Hot Chili Peppers',
            },
            {
                NUME: 'Nirvana',
            },
            {
                NUME: 'Arctic Monkeys',
            },
            {
                NUME: 'Radiohead',
            },
            {
                NUME: 'Imagine Dragons',
            },
            {
                NUME: 'Twenty One Pilots',
            },
            {
                NUME: 'Thirty Seconds to Mars',
            },
            {
                NUME: 'Limp Bizkit',
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('artisti', null, {});
    },
};
