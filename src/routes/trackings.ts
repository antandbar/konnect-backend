'use strict';

import { Router } from 'express';
import { trackingController } from '../controllers/trackingsController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/', jwtAuth, trackingController.getTracking);
router.post('/', jwtAuth, trackingController.postTracking);
router.put('/:id', jwtAuth, trackingController.updateTracking);
router.delete('/:id', jwtAuth, trackingController.deleteTracking);

export default router;
