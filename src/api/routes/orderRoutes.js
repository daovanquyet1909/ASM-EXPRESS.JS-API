const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
// const checkPermission = require('../middlewares/checkPermison');
// GET all orders
router.get('/', orderController.getAllorders);

// GET order by ID
router.get('/:id', orderController.getorderById);

// POST create new order
router.post('/', orderController.createorder);

// PUT update order by ID
router.put('/:id', orderController.updateorder);

// DELETE order by ID
router.delete('/:id', orderController.deleteorder);

module.exports = router;
