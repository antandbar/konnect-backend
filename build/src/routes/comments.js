'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentsController_1 = require("../controllers/commentsController");
const jwtAuth_1 = __importDefault(require("../lib/jwtAuth"));
const router = (0, express_1.Router)();
router.get('/', jwtAuth_1.default, commentsController_1.commentsController.getComments);
exports.default = router;
