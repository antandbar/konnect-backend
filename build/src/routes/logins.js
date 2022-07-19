'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginsController_1 = require("../controllers/loginsController");
const router = (0, express_1.Router)();
router.post('/', loginsController_1.loginsController.postJWT);
exports.default = router;
