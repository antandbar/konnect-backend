'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchEnginesController_1 = require("../controllers/searchEnginesController");
const router = (0, express_1.Router)();
router.get('/', searchEnginesController_1.searchEnginesController.getSearchEngines);
exports.default = router;
