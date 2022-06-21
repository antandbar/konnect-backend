'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController_1 = require("../controllers/booksController");
const router = (0, express_1.Router)();
router.get('/', booksController_1.booksController.getBooks);
router.post('/', booksController_1.booksController.saveBook);
exports.default = router;
