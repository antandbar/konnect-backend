'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_statusController_1 = require("../controllers/user-statusController");
const jwtAuth_1 = __importDefault(require("../lib/jwtAuth"));
const router = (0, express_1.Router)();
router.get('/', jwtAuth_1.default, user_statusController_1.userStatusController.getUserStatus);
router.post('/', jwtAuth_1.default, user_statusController_1.userStatusController.postUserStatus);
router.delete('/:id', jwtAuth_1.default, user_statusController_1.userStatusController.deleteUserStatus);
exports.default = router;
