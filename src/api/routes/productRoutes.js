const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/', productController.getAllProducts);

// GET product by ID
router.get('/:id', productController.getProductById);

// POST create new product
router.post('/', productController.createProduct);

// PUT update product by ID
router.put('/:id', productController.updateProduct);

// DELETE product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
