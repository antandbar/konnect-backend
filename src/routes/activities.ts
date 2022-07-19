'use strict';

import { Router } from 'express';
import { activitiesController } from '../controllers/activitiesController';

const router: Router = Router();

router.get('/', activitiesController.getActivities);
router.get('/:id', activitiesController.getActivityDetails);
router.post('/', activitiesController.postctivities);
router.delete('/:id', activitiesController.deleteActivities);

export default router;
