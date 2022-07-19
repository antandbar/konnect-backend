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
exports.userBo = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
class UserBo {
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const topics = yield User_1.default.findAll({ attributes: {
                    exclude: [
                        'password',
                    ],
                } });
            return topics;
        });
    }
    getUserDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const topics = yield User_1.default.findAll({
                where: { id: id }, attributes: {
                    exclude: [
                        'password',
                    ],
                }
            });
            return topics;
        });
    }
    postUser(userName, name, email, password, birthDate, userLocation, gender, bio) {
        return __awaiter(this, void 0, void 0, function* () {
            // Se guarda contraseña encriptada
            const bPassword = yield bcrypt_1.default.hash(password.toString(), 7);
            const user = yield User_1.default.create({
                userName: userName,
                name: name,
                email: email,
                password: bPassword,
                bithDate: birthDate,
                userLocation: userLocation,
                gender: gender,
                bio: bio,
            });
            return user;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const activity = yield User_1.default.destroy({
                where: {
                    id: id,
                },
            });
            return activity;
        });
    }
}
exports.userBo = new UserBo();
