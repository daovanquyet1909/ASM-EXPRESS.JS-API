const express = require('express');
const router = express.Router();
const orderStatusController = require('../controllers/orderStatusController');

// GET all order status
router.get('/', orderStatusController.getAllOrderStatus);

// GET order status by ID
router.get('/:id', orderStatusController.getOrderStatusById);

// POST create new order status
router.post('/', orderStatusController.createOrderStatus);

// PUT update order status by ID
router.put('/:id', orderStatusController.updateOrderStatus);

// DELETE order status by ID
router.delete('/:id', orderStatusController.deleteOrderStatus);

module.exports = router;
