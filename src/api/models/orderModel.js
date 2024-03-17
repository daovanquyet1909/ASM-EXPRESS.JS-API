const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        
        orderstatus:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'OrderStatus'
        },
        subtotal:{
            type: Number,
            required: false,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
