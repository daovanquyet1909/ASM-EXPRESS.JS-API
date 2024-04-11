// uploadMiddleware.js
const multer = require('multer');

// Cấu hình Multer
const upload = multer({
    dest: 'uploads/' // Thư mục tạm thời để lưu trữ ảnh
});

module.exports = upload;
