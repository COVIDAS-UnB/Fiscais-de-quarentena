'use strict';

const faker = require('faker-br');
const unb_subs = require('../../../subs.json');

const interests = unb_subs.subjects.map((sub) => {
  let name = sub;
  let shortName = name.split(" ").map((n)=>n[0]).join("");

  return {
    long_name : name,
    short_name : shortName,
    created_at: new Date(),
    updated_at: new Date()
  }
});

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('interests', interests,{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('interests', null, {});
  }
};
