'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      // firstName: DataTypes.STRING,
      // lastName: DataTypes.STRING,
      // email: DataTypes.STRING,
      // password: DataTypes.STRING,
      // identifier: DataTypes.STRING,
      // address: DataTypes.STRING,
      // phoneNumber: DataTypes.STRING,
      // gender: DataTypes.STRING,
      // role: DataTypes.BOOLEAN,
      // image: DataTypes.STRING,
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        password: '123456',
        identifier: '001',
        address: 'BinhDinh',
        phoneNumber: '0123456789',
        gender: 'Nam',
        role: 'R1',
        image: 'image',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
