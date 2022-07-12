'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
class UserSchema extends Model {
}
UserSchema.init({
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
}, {
    timestamps: false,
    sequelize: db,
    modelName: 'users',
});
exports.default = UserSchema;
