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
exports.userStatusController = void 0;
const user_statusBo_1 = require("../bos/user-statusBo");
class UserStatusController {
    getUserStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userStatus = yield user_statusBo_1.userStatusBo.getUserStatus();
                res.status(200).json({ results: userStatus });
            }
            catch (error) {
                next(error);
            }
        });
    }
    postUserStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const userStatus = yield user_statusBo_1.userStatusBo.postUserStatus(data);
                res.status(201).json({ results: userStatus });
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteUserStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userStatus = yield user_statusBo_1.userStatusBo.deleteUserStatus(req.params);
                res.status(200).json({ results: userStatus });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.userStatusController = new UserStatusController();
