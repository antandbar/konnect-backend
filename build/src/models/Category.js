'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
class CategorySchema extends Model {
}
CategorySchema.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    categoryName: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: db,
    modelName: 'categories',
});
exports.default = CategorySchema;
