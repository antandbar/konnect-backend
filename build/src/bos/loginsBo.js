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
exports.loginsBo = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
class LoginsBo {
    postJWT(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findOne({
                where: { email: email },
                attributes: {
                    exclude: [
                        'userName',
                        'name',
                        'email',
                        'bithDate',
                        'userLocation',
                        'gender',
                        'bio',
                    ],
                },
            });
            if (!user ||
                !(yield bcrypt_1.default.compare(password.toString(), user.dataValues.password))) {
                const err = new Error('Invalid credentials');
                err.status = 401;
                throw err;
            }
            return user;
        });
    }
}
exports.loginsBo = new LoginsBo();
