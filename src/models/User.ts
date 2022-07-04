'use strict';

const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');

export interface User {
  id: number;
  userName: string;
  name: string;
  email: string;
  password: string;
  bithDate: Date;
  userLocation: string;
  gender: string;
  bio: string;

}

class UserSchema extends Model<User> implements User {
  id!: number;
  userName!: string;
  name!: string;
  email!: string;
  password!: string;
  bithDate!: Date;
  userLocation!: string;
  gender!: string;
  bio!: string;
}

UserSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    bithDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userLocation: {
      type: DataTypes.STRING(50),
    },
    gender: {
      type: DataTypes.STRING(50),
    },
    bio: {
      type: DataTypes.STRING(800),
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'users',
  },
);

export default UserSchema;
