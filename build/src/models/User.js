'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class UserSchema extends sequelize_1.Model {
}
UserSchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: sequelize_1.DataTypes.STRING(20),
        unique: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(250),
        allowNull: false,
    },
    bithDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    userLocation: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    gender: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    bio: {
        type: sequelize_1.DataTypes.STRING(800),
    },
}, {
    timestamps: false,
    sequelize: connectPostgresql_1.db,
    modelName: 'users',
});
exports.default = UserSchema;
