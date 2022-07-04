'use strict';

import { Router } from 'express';
import { categoryController } from '../controllers/categoryController';

const router: Router = Router();

router.get('/', categoryController.getCategory);


export default router;