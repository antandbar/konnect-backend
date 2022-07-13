'use strict';

import { Router } from 'express';
import { userController } from '../controllers/userController';

const router: Router = Router();

router.get('/', userController.getUser);

router.post('/', userController.postUser);
//router.put('/:id', userController.putUser);
//router.delete('/:id', userController.deleteUser);



export default router;