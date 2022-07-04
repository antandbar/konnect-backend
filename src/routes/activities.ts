'use strict';

import { Router } from 'express';
import { activitiesController } from '../controllers/activitiesController';

const router: Router = Router();

//Obtener Actividades
router.get('/', activitiesController.getActivities);
// Crear Actividad
router.post('/', activitiesController.postctivities);

export default router;
