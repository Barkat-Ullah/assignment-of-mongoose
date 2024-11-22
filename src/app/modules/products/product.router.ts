import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
router.post('/create-product', productController.createProductController);
export const productRouter = router;
