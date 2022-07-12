'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
class LocationSchema extends Model {
}
LocationSchema.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    location: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: db,
    modelName: 'locations',
});
exports.default = LocationSchema;
