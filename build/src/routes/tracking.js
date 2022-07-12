'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trackingController_1 = require("../controllers/trackingController");
const router = (0, express_1.Router)();
router.get('/', trackingController_1.trackingController.getTracking);
exports.default = router;
