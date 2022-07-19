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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const usersBo_1 = require("../bos/usersBo");
class UserController {
    getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const location = yield usersBo_1.userBo.getUser();
                res.status(200).json({ results: location });
            }
            catch (error) {
                next(error);
            }
        });
    }
    getUserDetail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const location = yield usersBo_1.userBo.getUserDetail(req.params.id);
                res.status(200).json({ results: location });
            }
            catch (error) {
                next(error);
            }
        });
    }
    postUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName, name, email, password, birthDate, userLocation, gender, bio, } = req.body;
                const user = yield usersBo_1.userBo.postUser(userName, name, email, password, birthDate, userLocation, gender, bio);
                res.status(201).json({ results: user });
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield usersBo_1.userBo.deleteUser(req.params.id);
                res.status(200).json({ result: user });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.userController = new UserController();
