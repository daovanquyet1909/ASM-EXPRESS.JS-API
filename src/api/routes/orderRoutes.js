// routes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');



// GET all orders
router.get('/all', orderController.getAllorders);
// GET all orders
router.get('/', orderController.getOrderByToken);

// GET order by ID
router.get('/:id', orderController.getorderById);

// PUT update order by ID
router.put('/:id', orderController.updateorder);

// DELETE order by ID
router.delete('/:id', orderController.deleteorder);


router.post('/placeOrder', orderController.placeOrder);

module.exports = router;
