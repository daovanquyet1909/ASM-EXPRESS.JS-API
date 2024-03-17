
const Cart = require('../models/cartModel');

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
            const userId = decodedToken.userId;
            const user = await User.findById(userId).populate('role');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Bước 3: Tạo cart mới và lưu ID của người dùng vào cart
            const cart = new Cart({ user: userId });
            await cart.save();

            // Lưu cart ID vào request để sử dụng ở middleware tiếp theo hoặc trong controller
            req.cartId = cart._id;

            // Bước 4: Next middleware
            next();
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = checkPermission;
