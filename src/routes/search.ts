'use strict';
import { Router} from 'express';
import { searchController } from '../controllers/searchController';

const router: Router = Router(); 

router.get('/', searchController.getSearch);

export default router;