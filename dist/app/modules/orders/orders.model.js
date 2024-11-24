"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../products/product.model");
const orderBookSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
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
orderBookSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const order = this;
        const product = yield product_model_1.Product.findById(order.product);
        console.log('product ', product);
        if (!product) {
            return next(new Error('Product not found'));
        }
        if (product.quantity < order.quantity) {
            return next(new Error('Product out of stock'));
        }
        order.totalPrice = product.price * order.quantity;
        product.quantity = product.quantity - order.quantity;
        yield product.save();
        next();
    });
});
orderBookSchema.post('save', function (doc) {
    console.log(`Order ${doc._id} for product ${doc.product} has been placed.`);
});
exports.Order = (0, mongoose_1.model)('Order', orderBookSchema);
