import { Router } from 'express';
import {
  viewCart,
  addItemToCart,
  submitCartIntent,
} from '../controllers/cartController.js';

const router = Router();

router.get('/', viewCart);
router.post('/add', addItemToCart);
router.post('/submit', submitCartIntent);

export default router;
