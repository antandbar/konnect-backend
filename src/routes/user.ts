'use strict';

import { Router } from 'express';
import { userController } from '../controllers/usersController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/', jwtAuth, userController.getUser);
router.get('/:id', jwtAuth, userController.getUserDetail);
router.post('/', userController.postUser);
router.delete('/:id', jwtAuth, userController.deleteUser);

export default router;
