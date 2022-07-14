'use strict';

import { Router } from 'express';
import { trackingController } from '../controllers/trackingController';

const router: Router = Router();

router.get('/', trackingController.getTracking);
router.post('/', trackingController.postTracking);
router.put('/:id', trackingController.updateTracking);


export default router;