'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
class TopicSchema extends Model {
}
TopicSchema.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: DataTypes.STRING,
        unique: true,
    },
}, {
    timestamps: false,
    sequelize: db,
    modelName: 'topic',
});
exports.default = TopicSchema;
