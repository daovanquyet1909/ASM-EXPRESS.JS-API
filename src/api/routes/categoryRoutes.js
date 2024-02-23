const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// GET all categorys
router.get('/', categoryController.getAllCategory);

// GET category by ID
router.get('/:id', categoryController.getCategoryById);

// POST create new categorys
router.post('/', categoryController.createCategory);

// PUT update categorys by ID
router.put('/:id', categoryController.updateCategory);

// DELETE categorys by ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
