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
exports.productController = void 0;
const product_service_1 = require("./product.service");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const result = yield product_service_1.createProductService.createProductInfoDb(product);
        res.status(200).json({
            success: true,
            message: 'Book is created successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
            stack: err.stack,
        });
    }
});
const getProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchBook = req.query.searchTerm;
        const result = yield product_service_1.createProductService.getProductInfoDb(searchBook);
        res.status(200).json({
            success: true,
            message: 'All books are get successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
            stack: err.stack,
        });
    }
});
const getSingleProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield product_service_1.createProductService.getSingleProductInfoDb(id);
        res.status(200).json({
            success: true,
            message: 'Book retrieved successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
            stack: err.stack,
        });
    }
});
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = (yield product_service_1.createProductService.deleteProductInfoDb(id)) || {};
        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
            stack: err.stack,
        });
    }
});
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const updatedData = req.body;
        const result = yield product_service_1.createProductService.updateProductInfoDb(id, updatedData);
        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
            stack: err.stack,
        });
    }
});
exports.productController = {
    createProductController,
    getProductController,
    getSingleProductController,
    deleteProductController,
    updateProductController,
};
