"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// Routes
const express_1 = require("express");
// useCases
const listCategory_1 = require("./useCases/categories/listCategory");
const createCategory_1 = require("./useCases/categories/createCategory");
const listProducts_1 = require("./useCases/products/listProducts");
const listProductsBytCategories_1 = require("./useCases/products/listProductsBytCategories");
const createProducty_1 = require("./useCases/products/createProducty");
const cancelProducty_1 = require("./useCases/products/cancelProducty");
const listOrders_1 = require("./useCases/orders/listOrders");
const createOrder_1 = require("./useCases/orders/createOrder");
const changeOrderStatus_1 = require("./useCases/orders/changeOrderStatus");
const cancelOrder_1 = require("./useCases/orders/cancelOrder");
// Multer
const multer_1 = __importDefault(require("multer"));
// PathNode
const node_path_1 = __importDefault(require("node:path"));
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(req, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});
// Routes
exports.router = (0, express_1.Router)();
// List categories
exports.router.get('/categories', listCategory_1.listCategories);
// Create category
exports.router.post('/categories', createCategory_1.createCategory);
// List Products
exports.router.get('/products', listProducts_1.listProducts);
// List Products By Category
exports.router.get('/categories/:categoryId/products', listProductsBytCategories_1.listProductsBytCategories);
// Create product
exports.router.post('/products', upload.single('image'), createProducty_1.createProducty);
// Delete Product
exports.router.delete('/products/:productsId', cancelProducty_1.cancelProducty);
// List Order
exports.router.get('/orders', listOrders_1.listOrders);
// Create Order
exports.router.post('/orders', createOrder_1.createOrder);
// Change Order Status
exports.router.patch('/orders/:orderId', changeOrderStatus_1.changeOrderStatus);
// Delete Order
exports.router.delete('/orders/:orderId', cancelOrder_1.cancelOrder);
