"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_router_1 = require("./app/modules/products/product.router");
const orders_router_1 = require("./app/modules/orders/orders.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/products', product_router_1.productRouter);
app.use("/api/orders", orders_router_1.orderRouter);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running successfully!' });
});
exports.default = app;
