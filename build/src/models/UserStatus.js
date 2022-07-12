'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
class UserStatusSchema extends Model {
}
UserStatusSchema.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    statusDescription: {
        type: DataTypes.STRING(10),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: db,
    modelName: 'userStatuses',
});
exports.default = UserStatusSchema;
