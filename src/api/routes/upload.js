const express = require('express');
const multer = require('multer');
const { uploadImages } = require('../controllers/images');
const routeImages = express.Router();

// Khởi tạo multer
const upload = multer({
    dest: 'uploads/', // Thư mục lưu trữ tệp tin tạm thời
    limits: { fileSize: 10 * 1024 * 1024 }, // Giới hạn kích thước tệp tin (ở đây là 10MB)
});

// Sử dụng multer trong route để xử lý tệp trước khi chuyển cho xử lý ảnh
routeImages.post("/upload", upload.array('file', 10), uploadImages); // 'file' là tên của trường tệp trong form, và 10 là giới hạn số lượng tệp tin

module.exports = routeImages;
