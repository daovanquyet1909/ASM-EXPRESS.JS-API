// orderModel.js
const mongoose = require('mongoose');

const orderDetailsSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product' // Đảm bảo tham chiếu đúng tới model Product
    },
    quantity: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    }
});

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Đảm bảo tham chiếu đúng tới model User
    },
    total: {
        type: Number,
        required: true
    },
    orderDetails: [orderDetailsSchema] // Thêm orderDetails vào schema của Order
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
