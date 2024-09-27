'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LivingExpenses extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    LivingExpenses.init({
        roomId: DataTypes.INTEGER,
        electricNumber: DataTypes.STRING,
        waterNumber: DataTypes.STRING,
        date: DataTypes.DATE,
        electricPrice: DataTypes.STRING,
        electricWater: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'LivingExpenses',
    });
    return LivingExpenses;
};