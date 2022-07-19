'use strict';

import { Router } from 'express';
import { trackingController } from '../controllers/trackingsController';

const router: Router = Router();

router.get('/', trackingController.getTracking);
router.post('/', trackingController.postTracking);
router.put('/:id', trackingController.updateTracking);
router.delete('/:id', trackingController.deleteTracking);


export default router;