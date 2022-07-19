'use strict';

import { Router } from 'express';
import { countsController } from '../controllers/countsController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/signedup', jwtAuth, countsController.getCountSignedup);
router.get('/interested', jwtAuth, countsController.getCountInterested);

export default router;
