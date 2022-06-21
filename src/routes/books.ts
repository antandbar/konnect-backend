'use strict';
import { Router} from 'express';
import { booksController } from '../controllers/booksController';

const router: Router = Router(); 

router.get('/', booksController.getBooks);
router.post('/', booksController.saveBook);

export default router;