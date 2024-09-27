'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('livingexpenses', {
            // roomId: DataTypes.INTEGER,
            // electricNumber: DataTypes.STRING,
            // waterNumber: DataTypes.STRING,
            // date: DataTypes.DATE,
            // electricPrice: DataTypes.STRING,
            // electricWater: DataTypes.STRING,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            roomId: {
                type: Sequelize.INTEGER
            },
            electricNumber: {
                type: Sequelize.STRING
            },
            waterNumber: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            electricPrice: {
                type: Sequelize.STRING
            },
            electricWater: {
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
        await queryInterface.dropTable('livingexpenses');
    }
};