'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('evenimente', [
            {
                TITLU: 'Concert Red Hot Chili Peppers Bucuresti',
                PRETUL_BILETULUI: 200,
                DATA_EVENIMENTULUI: new Date('2023-01-30T21:00:00.000Z'),
                STOC: 2000,
                ARTIST_EVENIMENT: 1,
                ID_JUDET: 10,
            },
            {
                TITLU: 'Concert Nirvana Bucuresti',
                PRETUL_BILETULUI: 100,
                DATA_EVENIMENTULUI: new Date('2023-02-07T22:00:00.000Z'),
                STOC: 1000,
                ARTIST_EVENIMENT: 2,
                ID_JUDET: 10,
            },
            {
                TITLU: 'Concert Red Hot Chili Peppers Cluj',
                PRETUL_BILETULUI: 100,
                DATA_EVENIMENTULUI: new Date('2023-02-02T22:00:00.000Z'),
                STOC: 1000,
                ARTIST_EVENIMENT: 1,
                ID_JUDET: 14,
            },
            {
                TITLU: 'Concert Nirvana Cluj',
                PRETUL_BILETULUI: 100,
                DATA_EVENIMENTULUI: new Date('2023-02-14T22:00:00.000Z'),
                STOC: 1000,
                ARTIST_EVENIMENT: 2,
                ID_JUDET: 14,
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('evenimente', null, {});
    },
};
