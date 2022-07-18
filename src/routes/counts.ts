'use strict';

import { Router } from 'express';
import { countsController } from '../controllers/countsController';

const router: Router = Router();

router.get('/signedup', countsController.getCountSignedup);
router.get('/interested', countsController.getCountInterested);

export default router;
