'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
const Location_1 = __importDefault(require("./Location"));
const Category_1 = __importDefault(require("./Category"));
class ActivitySchema extends Model {
}
ActivitySchema.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(900),
    },
    userLimit: {
        type: DataTypes.INTEGER,
    },
    activityDate: {
        type: DataTypes.DATE,
    },
    locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "locations",
        referencesKey: "id"
    },
    place: {
        type: DataTypes.STRING(50),
    },
    maxAge: {
        type: DataTypes.INTEGER,
    },
    minAge: {
        type: DataTypes.INTEGER,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        model: "categories",
        referencesKey: "id"
    }
}, {
    sequelize: db,
    modelName: 'activities',
});
Location_1.default.hasMany(ActivitySchema);
Category_1.default.hasMany(ActivitySchema);
exports.default = ActivitySchema;
