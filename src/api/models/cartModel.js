// cartModel.js
const mongoose = require('mongoose');

const cartDetailsSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product' // Đảm bảo tham chiếu đúng tới model Product
    },
    quantity: {
        type: Number,
        required: true
    }
});

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Đảm bảo tham chiếu đúng tới model User
    },
    cartDetails: [cartDetailsSchema] // Thêm cartDetails vào schema của Cart
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
