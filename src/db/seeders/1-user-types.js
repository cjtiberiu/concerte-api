'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('tipuri_utilizatori', [
            {
                TIP: 'admin',
            },
            {
                TIP: 'user',
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('tipuri_utilizatori', null, {});
    },
};
