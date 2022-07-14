'use strict';

import { Router } from 'express';
import { activitiesController } from '../controllers/activitiesController';

const router: Router = Router();

//Obtener Actividades
router.get('/', activitiesController.getActivities);
// Obtener detalle Actividad
router.get('/:id', activitiesController.getActivityDetails);
// Crear Actividad
router.post('/', activitiesController.postctivities);
// Eliminar Actividad
router.delete('/:id', activitiesController.deleteActivities);

export default router;
