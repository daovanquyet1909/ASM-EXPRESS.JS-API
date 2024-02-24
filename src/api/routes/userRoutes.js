// userRoutes.js

const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');
const  checkPermission = require('../middlewares/checkPermison');

//login
userRoutes.post('/login/', userController.login);
//get all user
userRoutes.get('/', checkPermission, userController.getAllUser);
//get by id user
userRoutes.get('/:id', checkPermission, userController.getUserById);
//create user
userRoutes.post('/',  userController.createUser);
//update user by id
userRoutes.put('/:id', checkPermission, userController.updateUserById);
//delete user by id
userRoutes.delete('/:id', checkPermission, userController.deleteUserById);

module.exports = userRoutes;
