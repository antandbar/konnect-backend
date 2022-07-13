'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class CommentSchema extends sequelize_1.Model {
}
CommentSchema.init({
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
    commentText: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    commentDate: {
        type: sequelize_1.DataTypes.DATE,
    }
}, {
    timestamps: false,
    sequelize: connectPostgresql_1.db,
    modelName: 'Comments',
});
exports.default = CommentSchema;
