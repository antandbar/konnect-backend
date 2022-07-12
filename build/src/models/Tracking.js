'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
const User_1 = __importDefault(require("./User"));
const Activity_1 = __importDefault(require("./Activity"));
const UserStatus_1 = __importDefault(require("./UserStatus"));
class TrackingSchema extends Model {
}
TrackingSchema.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "users",
        referencesKey: "id"
    },
    activityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "activities",
        referencesKey: "id"
    },
    userStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "userStatuses",
        referencesKey: "id"
    },
}, {
    timestamps: false,
    sequelize: db,
    modelName: 'trackings',
});
User_1.default.hasMany(TrackingSchema);
Activity_1.default.hasMany(TrackingSchema);
UserStatus_1.default.hasMany(TrackingSchema);
exports.default = TrackingSchema;
