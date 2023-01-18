'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('user_types', [
            {
                TYPE: 'admin',
            },
            {
                TYPE: 'user',
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('user_types', null, {});
    },
};
