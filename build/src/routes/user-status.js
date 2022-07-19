'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_statusController_1 = require("../controllers/user-statusController");
const router = (0, express_1.Router)();
router.get('/', user_statusController_1.userStatusController.getUserStatus);
router.post('/', user_statusController_1.userStatusController.postUserStatus);
router.delete('/:id', user_statusController_1.userStatusController.deleteUserStatus);
exports.default = router;
