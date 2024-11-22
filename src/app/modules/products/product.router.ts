import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
router.get('/:productId', productController.getSingleProductController);
router.get('/', productController.getProductController);
router.post('/create-product', productController.createProductController);
router.delete('/:productId', productController.deleteProductController);
router.put('/:productId', productController.updateProductController);
export const productRouter = router;
