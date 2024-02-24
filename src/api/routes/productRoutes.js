const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const checkPermission = require('../middlewares/checkPermison');
// GET all products
router.get('/',checkPermission, productController.getAllProducts);

// GET product by ID
router.get('/:id', productController.getProductById);

// POST create new product
router.post('/',checkPermission, productController.createProduct);

// PUT update product by ID
router.put('/:id',checkPermission, productController.updateProduct);

// DELETE product by ID
router.delete('/:id',checkPermission, productController.deleteProduct);

module.exports = router;
