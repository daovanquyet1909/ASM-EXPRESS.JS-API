

const jwt = require('jsonwebtoken');
const CartDetails = require('../models/cartDetailsModel');
const Cart = require('../models/cartModel');

// POST create new cartdetails
exports.createcartdetails = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Kiểm tra xác thực token và lấy ID user từ token
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized - Token is required' });
        }

        const decodedToken = jwt.verify(token, 'your_secret_key');
        const userId = decodedToken.userId;

        // Lấy ID cart từ cơ sở dữ liệu dựa trên ID user
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingCartDetail = await CartDetails.findOne({ cart: cart._id, product: productId });
        if (existingCartDetail) {
            return res.status(400).json({ message: 'Product already exists in the cart' });
        }

        // Tạo mới cartdetail và lưu ID cart vào cartdetail
        const cartDetails = new CartDetails({
            product: productId,
            quantity: quantity,
            cart: cart._id
        });

        // Lưu cartdetail vào cơ sở dữ liệu
        await cartDetails.save();

        res.status(201).json({ message: 'Cart details created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



exports.getAllcartdetails = async (req, res) => {
    try {
        const allCartDetails = await CartDetails.find({});
        res.status(200).json(allCartDetails);
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
  