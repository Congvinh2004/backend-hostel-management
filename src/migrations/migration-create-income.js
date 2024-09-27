'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('income', {
            // timeType: DataTypes.DATE,
            // totalCoin: DataTypes.STRING,
            // incurredCosts: DataTypes.STRING,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            timeType: {
                type: Sequelize.DATE
            },
            totalCoin: {
                type: Sequelize.STRING
            },
            incurredCosts: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('income');
    }
};