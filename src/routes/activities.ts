'use strict';

import { Router } from 'express';
import { activitiesController } from '../controllers/activitiesController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/', jwtAuth, activitiesController.getActivities);
router.get('/:id', jwtAuth, activitiesController.getActivityDetails);
router.post('/', jwtAuth, activitiesController.postctivities);
router.delete('/:id', jwtAuth, activitiesController.deleteActivities);

export default router;
