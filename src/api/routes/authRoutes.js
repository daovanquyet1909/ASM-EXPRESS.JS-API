// userRoutes.js

const express = require('express');
const authRoutes = express.Router();
const authController = require('../controllers/authController');


//login
authRoutes.post('/login/', authController.login);

//create user
authRoutes.post('/',  authController.createUser);


module.exports = authRoutes;
