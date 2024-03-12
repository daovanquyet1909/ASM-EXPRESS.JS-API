const express  = require('express');
const postRoutes = express.Router();
const PostController = require('../controllers/postController');
const checkPermission = require('../middlewares/checkPermison');

//get all role
postRoutes.get('/' ,PostController.getAllPost);
//get by id role
postRoutes.get('/:id', PostController.getPostById);
//create role
postRoutes.post('/',PostController.createPost);
//update role by id
postRoutes.put('/:id', PostController.updatePostById);
//delete by id
postRoutes.delete('/:id', PostController.deletePostById);
module.exports = postRoutes;
