'use strict';

import { Router } from 'express';
import { locationController } from '../controllers/locationsController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/', locationController.getLocation);
router.post('/', jwtAuth, locationController.postLocation);

export default router;
