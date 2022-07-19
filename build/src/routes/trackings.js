'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trackingsController_1 = require("../controllers/trackingsController");
const jwtAuth_1 = __importDefault(require("../lib/jwtAuth"));
const router = (0, express_1.Router)();
router.get('/', jwtAuth_1.default, trackingsController_1.trackingController.getTracking);
router.post('/', jwtAuth_1.default, trackingsController_1.trackingController.postTracking);
router.put('/:id', jwtAuth_1.default, trackingsController_1.trackingController.updateTracking);
router.delete('/:id', jwtAuth_1.default, trackingsController_1.trackingController.deleteTracking);
exports.default = router;
