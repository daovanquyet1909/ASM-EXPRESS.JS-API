const express = require('express');
const router = express.Router();
const cartdetailsController = require('../controllers/cartDetailsController');
// const checkPermission = require('../middlewares/checkPermison');
// GET all cartdetailss
router.get('/', cartdetailsController.getAllcartdetailsForUser);

// GET cartdetails by ID
router.get('/:id', cartdetailsController.getcartdetailsById);

// POST create new cartdetails
router.post('/', cartdetailsController.createcartdetails);

// PUT update cartdetails by ID
router.put('/:id', cartdetailsController.updatecartdetails);

// DELETE cartdetails by ID
router.delete('/:id', cartdetailsController.deletecartdetails);


module.exports = router;
