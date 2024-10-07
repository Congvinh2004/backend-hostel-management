'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('rooms', {
            // roomName: DataTypes.STRING,
            // acreage: DataTypes.STRING,
            // price: DataTypes.INTEGER,
            // status: DataTypes.BOOLEAN,
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            roomName: {
                type: Sequelize.STRING
            },
            acreage: {
                type: Sequelize.STRING
            },
            priceId: {
                type: Sequelize.INTEGER
            },
            statusId: {
                type: Sequelize.BOOLEAN
            },
            discription: {
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
        await queryInterface.dropTable('rooms');
    }
};