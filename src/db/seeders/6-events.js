'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('evenimente', [
            {
                TITLU: 'Concert Jamie Jones Spatiul Tehnic',
                PRETUL_BILETULUI: 120,
                DATA_EVENIMENTULUI: new Date('2023-01-30T21:00:00.000Z'),
                STOC_INITIAL: 2000,
                STOC_CURENT: 2000,
                ARTIST_EVENIMENT: 1,
                ID_JUDET: 10,
                IMAGINE: 'concert1.jpg',
            },
            {
                TITLU: 'Concert Dubfire Guesthouse',
                PRETUL_BILETULUI: 80,
                DATA_EVENIMENTULUI: new Date('2023-02-07T22:00:00.000Z'),
                STOC_INITIAL: 900,
                STOC_CURENT: 900,
                ARTIST_EVENIMENT: 4,
                ID_JUDET: 10,
                IMAGINE: 'concert2.jpg',
            },
            {
                TITLU: 'Concert Solomun Cluj Arena',
                PRETUL_BILETULUI: 100,
                DATA_EVENIMENTULUI: new Date('2023-02-02T22:00:00.000Z'),
                STOC_INITIAL: 1000,
                STOC_CURENT: 1000,
                ARTIST_EVENIMENT: 8,
                ID_JUDET: 14,
                IMAGINE: 'concert3.jpg',
            },
            {
                TITLU: 'Concert Jamie Jones Cluj Arena',
                PRETUL_BILETULUI: 100,
                DATA_EVENIMENTULUI: new Date('2023-02-14T22:00:00.000Z'),
                STOC_INITIAL: 1000,
                STOC_CURENT: 1000,
                ARTIST_EVENIMENT: 1,
                ID_JUDET: 14,
                IMAGINE: 'concert4.jpg',
            },
            {
                TITLU: 'Concert Seth Troxler Hibrid',
                PRETUL_BILETULUI: 70,
                DATA_EVENIMENTULUI: new Date('2023-02-19T22:00:00.000Z'),
                STOC_INITIAL: 200,
                STOC_CURENT: 200,
                ARTIST_EVENIMENT: 3,
                ID_JUDET: 14,
                IMAGINE: 'concert2.jpg',
            },
            {
                TITLU: 'Concert Marco Carola Avi',
                PRETUL_BILETULUI: 60,
                DATA_EVENIMENTULUI: new Date('2023-02-22T22:00:00.000Z'),
                STOC_INITIAL: 250,
                STOC_CURENT: 250,
                ARTIST_EVENIMENT: 5,
                ID_JUDET: 28,
                IMAGINE: 'concert4.jpg',
            },
            {
                TITLU: 'Concert Marco Carola Guesthouse',
                PRETUL_BILETULUI: 120,
                DATA_EVENIMENTULUI: new Date('2023-02-28T22:00:00.000Z'),
                STOC_INITIAL: 1000,
                STOC_CURENT: 1000,
                ARTIST_EVENIMENT: 5,
                ID_JUDET: 10,
                IMAGINE: 'concert1.jpg',
            },
            {
                TITLU: 'Concert Hot Since 82 Form',
                PRETUL_BILETULUI: 100,
                DATA_EVENIMENTULUI: new Date('2023-03-04T22:00:00.000Z'),
                STOC_INITIAL: 1000,
                STOC_CURENT: 1000,
                ARTIST_EVENIMENT: 7,
                ID_JUDET: 14,
                IMAGINE: 'concert3.jpg',
            },
            {
                TITLU: 'Concert Hot Since 82 Spatiu Tehnic',
                PRETUL_BILETULUI: 110,
                DATA_EVENIMENTULUI: new Date('2023-03-05T22:00:00.000Z'),
                STOC_INITIAL: 2000,
                STOC_CURENT: 2000,
                ARTIST_EVENIMENT: 7,
                ID_JUDET: 10,
                IMAGINE: 'concert3.jpg',
            },
        ]);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('evenimente', null, {});
    },
};
