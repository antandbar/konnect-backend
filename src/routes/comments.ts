'use strict';

import { Router } from 'express';
import { commentsController } from '../controllers/commentsController';

const router: Router = Router();

router.get('/', commentsController.getComments);


export default router;