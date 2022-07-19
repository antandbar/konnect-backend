'use strict';

import { Router } from 'express';
import { categoryController } from '../controllers/categoriesController';

const router: Router = Router();

router.get('/', categoryController.getCategory);
router.post('/', categoryController.postCategory);


export default router;