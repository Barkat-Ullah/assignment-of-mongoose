import { TOrder } from './orders.interface';
import { Order } from './orders.model';

const createOrderBookService = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

const orderBookRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return result;
};

export const orderBookController = {
  createOrderBookService,
  orderBookRevenue,
};
