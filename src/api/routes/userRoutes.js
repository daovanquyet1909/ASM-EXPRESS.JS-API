const express = require ('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');

//get all user
userRoutes.get('/', userController.getAllUser);
//get by id user
userRoutes.get('/:id', userController.getUserById);
//create user
userRoutes.post('/', userController.createUser);
//update user by id
userRoutes.put('/:id', userController.updateUserById);
//delete user by id
userRoutes.delete('/:id', userController.deleteUserById);
module.exports = userRoutes;
