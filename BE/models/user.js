'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt')
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
    password: {
      type: DataTypes.STRING,
      set(value){
        const salt = bcrypt.genSaltSync(10)
        this.setDataValue('password', bcrypt.hashSync(value,salt))
      }
    },
    roleCode: DataTypes.STRING,
    avt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};