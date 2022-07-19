'use strict';

import { Router } from 'express';
import { categoryController } from '../controllers/categoriesController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/', jwtAuth, categoryController.getCategory);
router.post('/', jwtAuth, categoryController.postCategory);

export default router;
