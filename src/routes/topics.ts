'use strict';

import { Router } from 'express';
import { topicsController } from '../controllers/topicsController';

const router: Router = Router();

router.get('/', topicsController.getTopics);
router.post('/', topicsController.saveTopic);

export default router;
