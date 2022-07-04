'use strict';

import { Router } from 'express';
import { userController } from '../controllers/userController';

const router: Router = Router();

router.get('/', userController.getUser);


export default router;