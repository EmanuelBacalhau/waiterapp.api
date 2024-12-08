import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();
// List categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// List Products
router.get('/products', (req, res) => {});

// Create Product
router.post('/products', (req, res) => {});

// Get product by category
router.get('/categories/:categoryId/products', (req, res) => {});

// List Orders
router.get('/orders', (req, res) => {});

// Create Order
router.post('/orders', (req, res) => {});

// Change order status
router.patch('/orders/:orderId', (req, res) => {});

// Delete/Cancel Order
router.delete('/orders/:orderId', (req, res) => {});
