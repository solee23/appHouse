'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    adress: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    avt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};