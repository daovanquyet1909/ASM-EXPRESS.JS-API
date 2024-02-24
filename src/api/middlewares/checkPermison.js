const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const checkPermission = async (req, res, next) => {
    try {
        // Bước 1: Kiểm tra xem người dùng đã đăng nhập hay chưa
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token is required' });
        }

        // Bước 2: Xác thực token và lấy thông tin người dùng
        jwt.verify(token, 'your_secret_key', async (err, decodedToken) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            const user = await User.findById(decodedToken.userId).populate('role');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            
            // Bước 3: Kiểm tra quyền của người dùng
            // Kiểm tra xem vai trò của người dùng có phải là 'Admin' hay không
            if (user.role.name !== 'Admin') {
                return res.status(403).json({ message: 'You do not have permission to access this resource' });
            }

            // Bước 4: Next middleware
            next();
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = checkPermission;
