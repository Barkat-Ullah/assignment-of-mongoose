import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const ProductSchema = new Schema<TProduct>({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Fiction', 'Science', 'Poetry', 'Religious'],
      message: '{VALUE} is not a valid category',
    },
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity cannot be negative'],
  },
  inStock: {
    type: Boolean,
    default: true,
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

ProductSchema.pre('save', function (next) {
  this.inStock = this.quantity > 0;
  next();
});

ProductSchema.post('save', function (doc) {
  console.log(`Product '${doc.title}' has been updated successfully.`);
});

export const Product = model<TProduct>('Product', ProductSchema);
