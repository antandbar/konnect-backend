'use strict';

import { Router } from 'express';
import { countsController } from '../controllers/countsController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/signedup/:userId', jwtAuth, countsController.getCountSignedup);
router.get('/interested/:userId', jwtAuth, countsController.getCountInterested);

export default router;
