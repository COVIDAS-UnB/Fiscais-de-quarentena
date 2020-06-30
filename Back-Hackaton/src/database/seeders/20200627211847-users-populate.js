'use strict';

const faker = require('faker');

const users = [...Array(10)].map((user) => (
  {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    birthdate: faker.date.between('1940-01-01', '2000-01-05').toISOString().slice(0,10),
    phone: faker.phone.phoneNumber('61#########'),
    photo_url: faker.image.avatar(),
    created_at: new Date(),
    updated_at: new Date()
  }
));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', users,{});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
