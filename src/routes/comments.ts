'use strict';

import { Router } from 'express';
import { commentsController } from '../controllers/commentsController';
import jwtAuth from '../lib/jwtAuth';

const router: Router = Router();

router.get('/', jwtAuth, commentsController.getComments);

export default router;
