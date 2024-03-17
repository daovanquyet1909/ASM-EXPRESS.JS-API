// routes/searchRoutes.js

const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// GET products by name
router.get('/products', searchController.searchProductByName);

// GET posts by name
router.get('/posts', searchController.searchPostByName);

module.exports = router;
