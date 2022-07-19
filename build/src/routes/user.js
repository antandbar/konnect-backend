'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const jwtAuth_1 = __importDefault(require("../lib/jwtAuth"));
const router = (0, express_1.Router)();
router.get('/', jwtAuth_1.default, usersController_1.userController.getUser);
router.get('/:id', jwtAuth_1.default, usersController_1.userController.getUserDetail);
router.post('/', jwtAuth_1.default, usersController_1.userController.postUser);
router.delete('/:id', jwtAuth_1.default, usersController_1.userController.deleteUser);
exports.default = router;
