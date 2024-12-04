import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
router.delete(
  '/products/:productId',
  productController.deleteProductController,
);
router.get(
  '/products/:productId',
  productController.getSingleProductController,
);
router.get('/products', productController.getProductController);
router.post('/products', productController.createProductController);
router.put('/products/:productId', productController.updateProductController);
export const productRouter = router;
