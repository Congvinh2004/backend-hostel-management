'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('bills', {
            // roomId: DataTypes.STRING,
            // totalId: DataTypes.STRING,
            // date: DataTypes.DATE,
            // payId: DataTypes.BOOLEAN
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            roomId: {
                type: Sequelize.STRING
            },
            totalId: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            payId: {
                type: Sequelize.BOOLEAN
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('bills');
    }
};