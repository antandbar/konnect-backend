'use strict';

import { Router } from 'express';
import { locationController } from '../controllers/locationsController';

const router: Router = Router();

router.get('/', locationController.getLocation);
router.post('/', locationController.postLocation);


export default router;