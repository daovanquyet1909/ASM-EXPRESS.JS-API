const Cart = require('../models/cartModel');
const Order = require('../models/orderModel');
const OrderDetails = require('../models/orderDetailsModel');
const jwt = require('jsonwebtoken');


exports.placeOrder = async (req, res) => {
    try {
        // Kiểm tra mã token và lấy ID người dùng từ token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token is required' });
        }

        const decodedToken = jwt.verify(token, 'your_secret_key');
        const userId = decodedToken.userId;

        // Lấy thông tin giỏ hàng của người dùng
        const userCart = await Cart.findOne({ user: userId }).populate('cartDetails.product');

        if (!userCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Tạo order mới
        const newOrder = new Order({ user: userId, total: 0 }); // Khởi tạo total là 0

        // Tính toán tổng giá trị đơn hàng
        let total = 0;

        // Lặp qua từng sản phẩm được chọn trong giỏ hàng và tạo order details cho mỗi sản phẩm
        for (const cartDetails of userCart.cartDetails) {
            if (selectedCartDetails.includes(cartDetails._id.toString())) {
                const subtotal = cartDetails.product.price * cartDetails.quantity;

                // Tạo order details cho sản phẩm được chọn
                const orderDetails = new OrderDetails({
                    product: cartDetails.product._id,
                    quantity: cartDetails.quantity,
                    subtotal: subtotal,
                    order: newOrder._id
                });

                // Cập nhật total của đơn hàng
                total += subtotal;

                await orderDetails.save();

                // Xoá cart detail này khỏi giỏ hàng
                await cartDetails.remove();
            }
        }

        // Cập nhật total của đơn hàng
        newOrder.total = total;

        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAllorders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getorderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateorder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

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
};
