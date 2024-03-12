const express = require('express');
const imageProductRoutes = express.Router();
const imageProductController = require('../controllers/imageProductController');
// const checkPermission = require('../middlewares/checkPermission');

// Lấy tất cả sản phẩm hình ảnh
imageProductRoutes.get('/', imageProductController.getAllImageProduct);

// Lấy sản phẩm hình ảnh bằng ID
imageProductRoutes.get('/:id', imageProductController.getImageProductById);

// Tạo mới sản phẩm hình ảnh
imageProductRoutes.post('/', imageProductController.createImageProduct);

// Cập nhật sản phẩm hình ảnh bằng ID
imageProductRoutes.put('/:id', imageProductController.updateImageProductById);

// Xóa sản phẩm hình ảnh bằng ID
imageProductRoutes.delete('/:id', imageProductController.deleteImageProductById);

module.exports = imageProductRoutes;
