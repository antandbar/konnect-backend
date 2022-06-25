'use strict';
import { Router} from 'express';
import { searchEnginesController } from '../controllers/searchEnginesController';

const router: Router = Router(); 

router.get('/', searchEnginesController.getSearchEngines);

export default router;