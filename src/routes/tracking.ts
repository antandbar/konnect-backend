'use strict';

import { Router } from 'express';
import { trackingController } from '../controllers/trackingController';

const router: Router = Router();

router.get('/', trackingController.getTracking);


export default router;