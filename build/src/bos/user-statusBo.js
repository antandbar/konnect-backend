'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userStatusBo = void 0;
const UserStatus_1 = __importDefault(require("../models/UserStatus"));
class UserStatusBo {
    getUserStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const topics = yield UserStatus_1.default.findAll();
            return topics;
        });
    }
    postUserStatus(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const userStatus = yield UserStatus_1.default.create(data);
            return userStatus;
        });
    }
    putUserStatus(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataSend = {
                statusDescription: data.statusDescription,
            };
            const idUser = id.id;
            const userUpdated = yield UserStatus_1.default.update(dataSend, {
                where: {
                    id: idUser
                }
            });
            if (userUpdated) {
                const user = yield UserStatus_1.default.findAll({ id: idUser });
                return user;
            }
            return userUpdated;
        });
    }
    deleteUserStatus(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUserStatus = id.id;
            const user = yield UserStatus_1.default.destroy({
                where: {
                    id: idUserStatus
                }
            });
            return user;
        });
    }
}
exports.userStatusBo = new UserStatusBo();
