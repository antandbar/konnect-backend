'use strict';

import { Router } from 'express';
import { userStatusController } from '../controllers/user-statusController';

const router: Router = Router();

router.get('/', userStatusController.getUserStatus);
router.post('/', userStatusController.postUserStatus);
router.put('/:id', userStatusController.putUserStatus);
router.delete('/:id', userStatusController.deleteUserStatus);

export default router;