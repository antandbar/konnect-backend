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
                const data = {
                    userName: req.body.userName,
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    bithDate: req.body.bithDate,
                    userLocation: req.body.userLocation,
                    gender: req.body.gender,
                    bio: req.body.bio,
                };
                const location = yield usersBo_1.userBo.postUser(data);
                res.status(201).json({ results: location });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.userController = new UserController();
