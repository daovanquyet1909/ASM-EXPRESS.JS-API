const express  = require('express');
const roleRoutes = express.Router();
const roleController = require('../controllers/roleController');

//get all role
roleRoutes.get('/' ,roleController.getAllRole);
//get by id role
roleRoutes.get('/:id', roleController.getRoleById);
//create role
roleRoutes.post('/', roleController.createRole);
//update role by id
roleRoutes.put('/:id', roleController.updateRoleById);
//delete by id
roleRoutes.delete('/:id', roleController.deleteRoleById);
module.exports = roleRoutes;
