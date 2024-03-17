const jwt = require('jsonwebtoken');
const CartDetails = require('../models/cartDetailsModel');
const Cart = require('../models/cartModel');



// GET all cart details for a user
exports.getAllcartdetailsForUser = async (req, res) => {
    try {
        // Kiểm tra xác thực token và lấy ID user từ token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token is required' });
        }

        const decodedToken = jwt.verify(token, 'your_secret_key');
        const userId = decodedToken.userId;

        // Tìm cart của người dùng dựa trên ID user từ token
        const userCart = await Cart.findOne({ user: userId });
        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Tìm tất cả các cart details của cart của người dùng
        const allCartDetails = await CartDetails.find({ cart: userCart._id });
        res.status(200).json(allCartDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// POST create new cartdetails
exports.createcartdetails = async (req, res) => {
    try {
       

        // Kiểm tra xác thực token và lấy ID user từ token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token is required' });
        }

        const decodedToken = jwt.verify(token, 'your_secret_key');
        const userId = decodedToken.userId;

        // Tìm cart của người dùng dựa trên ID user từ token
        const userCart = await Cart.findOne({ user: userId });
        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Thêm ID của cart vào req.body trước khi tạo mới cart detail
        req.body.cart = userCart._id;

        // Thêm sản phẩm vào giỏ hàng bằng cách tạo mới cart detail
        const newCartDetail = await CartDetails.create(req.body);
        res.status(201).json(newCartDetail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}










exports.getcartdetailsById = async (req, res) => {
    try {
        const { id } = req.params;
        const cartDetail = await CartDetails.findById(id);
        res.status(200).json(cartDetail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}





exports.updatecartdetails = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCartDetail = await CartDetails.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedCartDetail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deletecartdetails = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCartDetail = await CartDetails.findByIdAndDelete(id);
        if (!deletedCartDetail) {
            return res.status(404).json({ message: `Cart details with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'Cart details deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
  