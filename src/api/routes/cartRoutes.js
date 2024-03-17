const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
// const checkPermission = require('../middlewares/checkPermison');



router.get('/', cartController.getAllcarts);

router.get('/:id', cartController.getcartById);

router.post('/', cartController.createcart);

router.put('/:id',cartController.updatecart);

router.delete('/:id',cartController.deletecart);

module.exports = router;
