const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter user name"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        // Bạn có thể thêm một validator tùy chỉnh ở đây để đảm bảo định dạng email đúng
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
        // Bạn có thể thêm các validation khác như độ dài tối thiểu, v.v.
    },
    address: {
        type: String,
        required: false,
    },
    phone: {
        type: Number,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    cloudinaryImage: {
        type: String // Lưu trữ public ID của ảnh từ Cloudinary
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
