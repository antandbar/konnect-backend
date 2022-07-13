'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class TrackingSchema extends sequelize_1.Model {
}
TrackingSchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    activityId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    userStatusId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: connectPostgresql_1.db,
    modelName: 'trackings',
});
exports.default = TrackingSchema;
