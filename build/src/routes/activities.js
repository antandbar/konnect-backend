'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activitiesController_1 = require("../controllers/activitiesController");
const jwtAuth_1 = __importDefault(require("../lib/jwtAuth"));
const router = (0, express_1.Router)();
router.get('/', jwtAuth_1.default, activitiesController_1.activitiesController.getActivities);
router.get('/:id', jwtAuth_1.default, activitiesController_1.activitiesController.getActivityDetails);
router.post('/', jwtAuth_1.default, activitiesController_1.activitiesController.postctivities);
router.delete('/:id', jwtAuth_1.default, activitiesController_1.activitiesController.deleteActivities);
exports.default = router;
