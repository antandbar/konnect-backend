'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locationsController_1 = require("../controllers/locationsController");
const jwtAuth_1 = __importDefault(require("../lib/jwtAuth"));
const router = (0, express_1.Router)();
router.get('/', jwtAuth_1.default, locationsController_1.locationController.getLocation);
router.post('/', jwtAuth_1.default, locationsController_1.locationController.postLocation);
exports.default = router;
