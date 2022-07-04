'use strict';

import { Router } from 'express';
import { locationController } from '../controllers/locationController';

const router: Router = Router();

router.get('/', locationController.getLocation);
router.post('/', locationController.postLocation);


export default router;