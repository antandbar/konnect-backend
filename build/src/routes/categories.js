'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
const router = (0, express_1.Router)();
router.get('/', categoryController_1.categoryController.getCategory);
router.post('/', categoryController_1.categoryController.postCategory);
exports.default = router;
