const express  = require('express');
const imagepostRoutes = express.Router();
const imagePostController = require('../controllers/imagePostController');
const checkPermission = require('../middlewares/checkPermison');

//get all role
imagepostRoutes.get('/' ,imagePostController.getAllImagePost);
//get by id role
imagepostRoutes.get('/:id', imagePostController.getImagePostById);
//create role
imagepostRoutes.post('/',imagePostController.createImagePost);
//update role by id
imagepostRoutes.put('/:id', imagePostController.updateImagePostById);
//delete by id
imagepostRoutes.delete('/:id', imagePostController.deleteImagePostById);
module.exports = imagepostRoutes;
