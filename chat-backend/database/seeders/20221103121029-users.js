'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
    {
      firstName: 'Jhon',
      lastName: 'Smit',
      email: 'jhon@gmail.com',
      password: bcrypt.hashSync('aboba', 10),
      gender: 'male'
    },
    {
      firstName: 'Veronika',
      lastName: 'Stepanova',
      email: 'stepanova@gmail.com',
      password: 'asd2131a',
      gender: 'female'
    },
    {
      firstName: 'Oleg',
      lastName: 'Gazmavnov',
      email: 'gaz@gmail.com',
      password: 'gzaz213ad',
      gender: 'male'
    },
    {
      firstName: 'Oleg',
      lastName: 'Tinkoff',
      email: 'tinkoff@gmail.com',
      password: '213da123',
      gender: 'male'
    },
    {
      firstName: 'Pasha',
      lastName: 'Bizeps',
      email: 'bizeps@gmail.com',
      password: 'bizsda3123a',
      gender: 'male'
    },
    {
      firstName: 'Yasha',
      lastName: 'ZzzZ',
      email: 'yasha@gmail.com',
      password: bcrypt.hashSync('12345', 10),
      gender: 'male'
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
