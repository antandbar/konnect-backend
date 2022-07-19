'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const countsController_1 = require("../controllers/countsController");
const jwtAuth_1 = __importDefault(require("../lib/jwtAuth"));
const router = (0, express_1.Router)();
router.get('/signedup', jwtAuth_1.default, countsController_1.countsController.getCountSignedup);
router.get('/interested', jwtAuth_1.default, countsController_1.countsController.getCountInterested);
exports.default = router;
