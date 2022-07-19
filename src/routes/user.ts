'use strict';

import { Router } from 'express';
import { userController } from '../controllers/usersController';

const router: Router = Router();

router.get('/', userController.getUser);
router.get('/:id', userController.getUserDetail);
router.post('/', userController.postUser);
router.delete('/:id', userController.deleteUser);



export default router;