'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countsController_1 = require("../controllers/countsController");
const router = (0, express_1.Router)();
router.get('/signedup', countsController_1.countsController.getCountSignedup);
router.get('/interested', countsController_1.countsController.getCountInterested);
exports.default = router;
