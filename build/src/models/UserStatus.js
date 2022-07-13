'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class UserStatusSchema extends sequelize_1.Model {
}
UserStatusSchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    statusDescription: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: connectPostgresql_1.db,
    modelName: 'userStatuses',
});
exports.default = UserStatusSchema;
