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
const User_1 = __importDefault(require("../models/User"));
class UserBo {
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const topics = yield User_1.default.findAll();
            return topics;
        });
    }
    postUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.create(data);
            return user;
        });
    }
    putUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataSend = {
                userName: data.userName,
                name: data.name,
                email: data.email,
                password: data.password,
                userLocation: data.userLocation,
                gender: data.gender,
                bio: data.bio
            };
            const idUser = id.id;
            const userUpdated = yield User_1.default.update(dataSend, {
                where: {
                    id: idUser
                }
            });
            if (userUpdated) {
                const user = yield User_1.default.findAll({ id: idUser });
                return user;
            }
            return userUpdated;
        });
    }
    deletetUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = idUser;
            console.log(id);
            const user = yield User_1.default.destroy({
                where: {
                    id: id
                }
            });
            return user;
        });
    }
}
exports.userBo = new UserBo();
