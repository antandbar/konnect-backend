'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activitiesController_1 = require("../controllers/activitiesController");
const router = (0, express_1.Router)();
//Obtener Actividades
router.get('/', activitiesController_1.activitiesController.getActivities);
// Crear Actividad
router.post('/', activitiesController_1.activitiesController.postctivities);
exports.default = router;
