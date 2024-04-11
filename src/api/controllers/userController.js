const User = require('../models/userModel');
const cloudinary = require("../../config/cloudinaryConfig");
const jwt = require('jsonwebtoken');




exports.getUserByToken = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token is required' });
        }

        const decodedToken = jwt.verify(token, 'your_secret_key');
        const userId = decodedToken.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateUserById = async (req, res) => {
    try {
        const { id } = req.params;

        // Lấy dữ liệu người dùng từ req.body
        let userData = req.body;

        // Kiểm tra nếu có đường dẫn ảnh từ thiết bị được nhập
        if (req.body.url) {
            // Upload ảnh đại diện lên Cloudinary
            const uploadedImage = await cloudinary.uploader.upload(req.body.url);

            // Lưu URL của ảnh đại diện vào dữ liệu người dùng
            userData.url = uploadedImage.secure_url;
            userData.cloudinaryImage = uploadedImage.public_id;
        }

        // Cập nhật thông tin người dùng trong cơ sở dữ liệu
        const updatedUser = await User.findByIdAndUpdate(id, userData, { new: true });

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: `User with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
