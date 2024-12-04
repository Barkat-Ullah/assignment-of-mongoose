import express from 'express';
import { createOrderRouter } from './orders.controller';

const router = express.Router();
router.post('/', createOrderRouter.createOrderBookController);
router.get('/revenue', createOrderRouter.orderRevenueController);
export const orderRouter = router;
