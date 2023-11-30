'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserM.init({
    uid: DataTypes.UUID,
    provider: DataTypes.STRING,
    link: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserM',
  });
  return UserM;
};