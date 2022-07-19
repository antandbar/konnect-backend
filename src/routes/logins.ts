'use strict';

import { Router } from 'express';
import { loginsController } from '../controllers/loginsController';

const router: Router = Router();

router.post('/', loginsController.postJWT);

export default router;
