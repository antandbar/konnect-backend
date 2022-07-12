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
    getUserStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userStatus = yield user_statusBo_1.userStatusBo.getUserStatus();
            res.status(200).json({ results: userStatus });
        });
    }
    postUserStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const userStatus = yield user_statusBo_1.userStatusBo.postUserStatus(data);
            res.status(200).json({ results: userStatus });
        });
    }
    putUserStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                statusDescription: req.body.statusDescription,
            };
            const userStatus = yield user_statusBo_1.userStatusBo.putUserStatus(req.params, data);
            res.status(200).json({ results: userStatus });
        });
    }
    deleteUserStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userStatus = yield user_statusBo_1.userStatusBo.deleteUserStatus(req.params);
            res.status(200).json({ results: userStatus });
        });
    }
}
exports.userStatusController = new UserStatusController();
