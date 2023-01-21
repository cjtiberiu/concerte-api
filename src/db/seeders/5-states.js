'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('judete', statesObj);
    },
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('judete', null, {});
    },
};

let states = [
    'Alba',
    'Arad',
    'Arges',
    'Bacau',
    'Bihor',
    'Bistrita-Nasaud',
    'Botosani',
    'Braila',
    'Brasov',
    'Bucuresti',
    'Buzau',
    'Calarasi',
    'Caras-Severin',
    'Cluj',
    'Constanta',
    'Covasna',
    'Dimbovita',
    'Dolj',
    'Galati',
    'Gorj',
    'Giurgiu',
    'Harghita',
    'Hunedoara',
    'Ialomita',
    'Iasi',
    'Ilfov',
    'Maramures',
    'Mehedinti',
    'Mures',
    'Neamt',
    'Olt',
    'Prahova',
    'Salaj',
    'Satu Mare',
    'Sibiu',
    'Suceava',
    'Teleorman',
    'Timis',
    'Tulcea',
    'Vaslui',
    'Vilcea',
    'Vrancea',
];

let statesObj = [];

for (let i = 0; i < states.length; i++) {
    statesObj.push({ NUME: states[i] });
}
