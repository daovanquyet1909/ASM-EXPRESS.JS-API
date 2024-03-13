const express = require('express');
const router = express.Router();
const orderstatusController = require('../controllers/orderStatusController');
// const checkPermission = require('../middlewares/checkPermison');
// GET all orderstatus
router.get('/', orderstatusController.getAllorderstatus);

// GET orderstatus by ID
router.get('/:id', orderstatusController.getorderstatusById);

// POST create new orderstatus
router.post('/', orderstatusController.createorderstatus);

// PUT update orderstatus by ID
router.put('/:id', orderstatusController.updateorderstatus);

// DELETE orderstatus by ID
router.delete('/:id', orderstatusController.deleteorderstatus);

module.exports = router;
