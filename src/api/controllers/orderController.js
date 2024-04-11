const Order = require('../models/orderModel');

const jwt = require('jsonwebtoken');
const OrderDetails = require('../models/orderDetailsModel');
const Cart = require('../models/cartModel');
const CartDetails = require('../models/cartDetailsModel');


exports.placeOrder = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token is required' });
        }

        const decodedToken = jwt.verify(token, 'your_secret_key');
        const userId = decodedToken.userId;

        // Lấy thông tin địa chỉ và số điện thoại từ request body
        const { address, phonenumber } = req.body;

        // Lấy giỏ hàng của người dùng
        const userCart = await Cart.findOne({ user: userId });
        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Lấy tất cả chi tiết giỏ hàng của giỏ hàng của người dùng và populate thông tin sản phẩm
        const cartDetails = await CartDetails.find({ cart: userCart._id }).populate('product');

        // Kiểm tra nếu giỏ hàng trống
        if (cartDetails.length === 0) {
            return res.status(400).json({ message: 'Your cart is empty' });
        }

        // Tạo đơn hàng mới
        const newOrder = await Order.create({ user: userId, orderstatus: '66037bc0fdebad48939dca5f', address, phonenumber });

        // Tạo chi tiết đơn hàng và tính tổng đơn hàng
        let total = 0;
        for (const cartDetail of cartDetails) {
            const quantity = parseFloat(cartDetail.quantity);
            const price = parseFloat(cartDetail.product.price);
            if (isNaN(quantity) || isNaN(price)) {
                return res.status(400).json({ message: 'Invalid quantity or price' });
            }

            const orderDetail = await OrderDetails.create({
                quantity: quantity,
                order: newOrder._id,
                product: cartDetail.product,
                subtotal: quantity * price
            });
            total += orderDetail.subtotal;
        }

        // Cập nhật tổng đơn hàng
        await Order.findByIdAndUpdate(newOrder._id, { subtotal: total });

        // Xóa chi tiết giỏ hàng sau khi đã đặt hàng thành công
        await CartDetails.deleteMany({ cart: userCart._id });

        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.getOrderByToken = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token is required' });
        }

        const decodedToken = jwt.verify(token, 'your_secret_key');
        const userId = decodedToken.userId;

        const orders = await Order.find({ user: userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getAllorders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getorderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateorder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteorder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await Order.findByIdAndDelete(id);
        if (!deletedOrder) {
            return res.status(404).json({ message: `Order with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}