import express from 'express';
import { createOrderRouter } from './orders.controller';

const router = express.Router();
router.post('/orders', createOrderRouter.createOrderBookController);
router.get('/orders/revenue', createOrderRouter.orderRevenueController);
export const orderRouter = router;
