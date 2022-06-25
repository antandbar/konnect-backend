'use strict';

import { Router } from 'express';
import { activitiesController } from '../controllers/activitiesController';

const router: Router = Router();

router.get('/', activitiesController.getActivities);


export default router;
