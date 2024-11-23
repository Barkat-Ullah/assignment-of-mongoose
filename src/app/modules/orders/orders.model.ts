import { model, Schema } from 'mongoose';
import { TOrder } from '../products/product.interface';
import { Product } from '../products/product.model';

const orderBookSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity must be a positive number'],
  },
  totalPrice: {
    type: Number,
    min: [0, 'Total price must be a positive number'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

orderBookSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const order = this;
  const product = await Product.findById(order.product);
  console.log('product ', product);

  if (!product) {
    return next(new Error('Product not found'));
  }
  if (product.quantity < order.quantity) {
    return next(new Error('Product out of stock'));
  }

  order.totalPrice = product.price * order.quantity;
  product.quantity = product.quantity - order.quantity;
 
  await product.save();
  next();
});

orderBookSchema.post('save', function (doc) {
  console.log(`Order ${doc._id} for product ${doc.product} has been placed.`);
});

export const Order = model<TOrder>('Order', orderBookSchema);
