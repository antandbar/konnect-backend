'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trackingController_1 = require("../controllers/trackingController");
const router = (0, express_1.Router)();
router.get('/', trackingController_1.trackingController.getTracking);
router.post('/', trackingController_1.trackingController.postTracking);
router.put('/:id', trackingController_1.trackingController.updateTracking);
exports.default = router;
