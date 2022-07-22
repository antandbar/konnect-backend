'use strict';

import { Router } from 'express';
import { credentialsController } from '../controllers/credentialsController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/', jwtAuth, credentialsController.getCredentials);

export default router;
