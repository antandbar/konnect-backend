'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class LocationSchema extends sequelize_1.Model {
}
LocationSchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    location: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: connectPostgresql_1.db,
    modelName: 'locations',
});
exports.default = LocationSchema;
