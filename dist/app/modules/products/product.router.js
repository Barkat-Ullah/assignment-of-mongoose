"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.get('/:productId', product_controller_1.productController.getSingleProductController);
router.get('/', product_controller_1.productController.getProductController);
router.post('/create-product', product_controller_1.productController.createProductController);
router.delete('/:productId', product_controller_1.productController.deleteProductController);
router.put('/:productId', product_controller_1.productController.updateProductController);
exports.productRouter = router;
