'use strict';

import { Router } from 'express';
import { userStatusController } from '../controllers/user-statusController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/', jwtAuth, userStatusController.getUserStatus);
router.post('/', jwtAuth, userStatusController.postUserStatus);
router.delete('/:id', jwtAuth, userStatusController.deleteUserStatus);

export default router;
