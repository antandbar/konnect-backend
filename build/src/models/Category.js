'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class CategorySchema extends sequelize_1.Model {
}
CategorySchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    categoryName: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: connectPostgresql_1.db,
    modelName: 'categories',
});
exports.default = CategorySchema;
