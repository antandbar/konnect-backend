"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Activity_1 = __importDefault(require("./Activity"));
const Location_1 = __importDefault(require("./Location"));
const Category_1 = __importDefault(require("./Category"));
const User_1 = __importDefault(require("./User"));
const Comment_1 = __importDefault(require("./Comment"));
const UserStatus_1 = __importDefault(require("./UserStatus"));
const Tracking_1 = __importDefault(require("./Tracking"));
class Associations {
    relations() {
        Location_1.default.hasMany(Activity_1.default, { foreignKey: 'locationId' });
        Category_1.default.hasMany(Activity_1.default, { foreignKey: 'activityId' });
        Activity_1.default.belongsTo(Location_1.default);
        Activity_1.default.belongsTo(Category_1.default);
        User_1.default.hasMany(Comment_1.default, { foreignKey: 'userId' });
        Activity_1.default.hasMany(Comment_1.default, { foreignKey: 'activityId' });
        Comment_1.default.belongsTo(User_1.default);
        Comment_1.default.belongsTo(Activity_1.default);
        User_1.default.hasMany(Tracking_1.default, { foreignKey: 'userId' });
        Activity_1.default.hasMany(Tracking_1.default, { foreignKey: 'activityId' });
        UserStatus_1.default.hasMany(Tracking_1.default, { foreignKey: 'userStatusId' });
        Tracking_1.default.belongsTo(User_1.default);
        Tracking_1.default.belongsTo(Activity_1.default);
        Tracking_1.default.belongsTo(UserStatus_1.default);
    }
}
exports.default = new Associations();
