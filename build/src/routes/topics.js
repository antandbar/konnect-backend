'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const topicsController_1 = require("../controllers/topicsController");
const router = (0, express_1.Router)();
router.get('/', topicsController_1.topicsController.getTopics);
router.post('/', topicsController_1.topicsController.saveTopic);
exports.default = router;
