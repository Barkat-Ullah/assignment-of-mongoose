import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
router.delete('/:productId', productController.deleteProductController);
router.get('/:productId', productController.getSingleProductController);
router.get('/', productController.getProductController);
router.post('/', productController.createProductController);
router.put('/:productId', productController.updateProductController);
export const productRouter = router;
