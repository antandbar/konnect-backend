'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activitiesController_1 = require("../controllers/activitiesController");
const router = (0, express_1.Router)();
//Obtener Actividades
router.get('/', activitiesController_1.activitiesController.getActivities);
// Obtener detalle Actividad
router.get('/:id', activitiesController_1.activitiesController.getActivityDetails);
// Crear Actividad
router.post('/', activitiesController_1.activitiesController.postctivities);
// Eliminar Actividad
router.delete('/:id', activitiesController_1.activitiesController.deleteActivities);
exports.default = router;
