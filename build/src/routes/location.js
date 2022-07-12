'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locationController_1 = require("../controllers/locationController");
const router = (0, express_1.Router)();
router.get('/', locationController_1.locationController.getLocation);
router.post('/', locationController_1.locationController.postLocation);
exports.default = router;
