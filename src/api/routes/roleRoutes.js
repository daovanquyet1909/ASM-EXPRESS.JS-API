const express  = require('express');
const roleRoutes = express.Router();
const roleController = require('../controllers/roleController');
const checkPermission = require('../middlewares/checkPermison');

//get all role
roleRoutes.get('/' ,checkPermission,roleController.getAllRole);
//get by id role
roleRoutes.get('/:id',checkPermission, roleController.getRoleById);
//create role
roleRoutes.post('/', checkPermission,roleController.createRole);
//update role by id
roleRoutes.put('/:id',checkPermission, roleController.updateRoleById);
//delete by id
roleRoutes.delete('/:id',checkPermission, roleController.deleteRoleById);
module.exports = roleRoutes;
