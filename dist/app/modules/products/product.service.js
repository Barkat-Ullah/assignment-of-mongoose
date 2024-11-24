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
exports.createProductService = void 0;
const product_model_1 = require("./product.model");
const createProductInfoDb = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(productData);
    return result;
});
const getProductInfoDb = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let searchProduct = {};
    if (searchTerm) {
        searchProduct = {
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { author: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
            ],
        };
    }
    const result = yield product_model_1.Product.find(searchProduct);
    return result;
});
const getSingleProductInfoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
const deleteProductInfoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield product_model_1.Product.findByIdAndDelete(id)) || {};
    return result;
});
const updateProductInfoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
exports.createProductService = {
    createProductInfoDb,
    getProductInfoDb,
    getSingleProductInfoDb,
    deleteProductInfoDb,
    updateProductInfoDb,
};
