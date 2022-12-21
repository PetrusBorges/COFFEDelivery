// Routes
import { Router } from 'express';

// useCases
import { listCategories } from './useCases/categories/listCategory';
import { createCategory } from './useCases/categories/createCategory';
import { listProducts } from './useCases/products/listProducts';
import { listProductsBytCategories } from './useCases/products/listProductsBytCategories';
import { createProducty } from './useCases/products/createProducty';
import { cancelProducty } from './useCases/products/cancelProducty';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';

// Multer
import multer from 'multer';

// PathNode
import path from 'node:path';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// Routes
export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List Products
router.get('/products', listProducts);

// List Products By Category
router.get('/categories/:categoryId/products', listProductsBytCategories);

// Create product
router.post('/products', upload.single('image'), createProducty);

// Delete Product
router.delete('/products/:productsId', cancelProducty);

// List Order
router.get('/orders', listOrders);

// Create Order
router.post('/orders', createOrder);

// Change Order Status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete Order
router.delete('/orders/:orderId', cancelOrder);
