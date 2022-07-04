'use strict';

import { Router } from 'express';
import { userStatusController } from '../controllers/user-statusController';

const router: Router = Router();

router.get('/', userStatusController.getUserStatus);


export default router;