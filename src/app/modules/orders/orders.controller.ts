import { Request, Response } from 'express';
import { orderBookController } from './orders.service';

const createOrderBookController = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderBookController.createOrderBookService(orderData);
    res.status(200).json({
      success: true,
      message: 'Order is created successfully',
      data: result,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
      
    });
  }
};
const orderRevenueController = async (req: Request, res: Response) => {
    try {
        const result = await orderBookController.orderBookRevenue();
        res.status(200).json({
          success: true,
          message: 'Revenue retrieved successfully',
          data: result,
        });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
        res.status(500).json({
          success: false,
          message: err.message || 'something went wrong',
          error: err,
        });
    } 
}

export const createOrderRouter = {
  createOrderBookController,
  orderRevenueController
};
