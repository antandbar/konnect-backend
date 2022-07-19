'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesController_1 = require("../controllers/categoriesController");
const jwtAuth_1 = __importDefault(require("../lib/jwtAuth"));
const router = (0, express_1.Router)();
router.get('/', jwtAuth_1.default, categoriesController_1.categoryController.getCategory);
router.post('/', jwtAuth_1.default, categoriesController_1.categoryController.postCategory);
exports.default = router;
