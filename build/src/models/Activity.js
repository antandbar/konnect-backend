'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class ActivitySchema extends sequelize_1.Model {
}
ActivitySchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(900),
    },
    userLimit: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    activityDate: {
        type: sequelize_1.DataTypes.DATE,
    },
    locationId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    place: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    maxAge: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    minAge: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: connectPostgresql_1.db,
    modelName: 'activities',
});
exports.default = ActivitySchema;
