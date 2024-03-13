const express = require('express');
const router = express.Router();
const orderdetailsController = require('../controllers/orderDetailsCotroller');
// const checkPermission = require('../middlewares/checkPermison');
// GET all orderdetails
router.get('/', orderdetailsController.getAllorderdetails);

// GET orderdetails by ID
router.get('/:id', orderdetailsController.getorderdetailsById);

// POST create new orderdetails
router.post('/', orderdetailsController.createorderdetails);

// PUT update orderdetails by ID
router.put('/:id', orderdetailsController.updateorderdetails);

// DELETE orderdetails by ID
router.delete('/:id', orderdetailsController.deleteorderdetails);

module.exports = router;
