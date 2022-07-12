'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
const User_1 = __importDefault(require("./User"));
const Activity_1 = __importDefault(require("./Activity"));
class CommentSchema extends Model {
}
CommentSchema.init({
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
    commentText: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    commentDate: {
        type: DataTypes.DATE,
    }
}, {
    timestamps: false,
    sequelize: db,
    modelName: 'Comments',
});
User_1.default.hasMany(CommentSchema);
Activity_1.default.hasMany(CommentSchema);
exports.default = CommentSchema;
