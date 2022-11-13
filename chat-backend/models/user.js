'use strict';

const bcrypt = require('bcrypt');
const config = require('./../config/config');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
      }
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [2,10],
      }
    },
    gender: DataTypes.STRING,
    avatar: {
      type: DataTypes.STRING,
        get(){
          const avatar = this.getDataValue('avatar');
          const url = `${config.appUrl}:${config.port}`;

          if(!avatar) {
            return `${url}/${this.getDataValue('gender')}.svg`;
          }
        }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: hashpassword,
      beforeUpdate: hashpassword,
    }
  });
  return User;
};


const hashpassword = async (user) => {
  if(user.changed('password')){
    user.password = await bcrypt.hash(user.password, 10)
  }

  return user;
};