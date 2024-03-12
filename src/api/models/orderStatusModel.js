const mongoose = require('mongoose');

const orderStatusSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a OrderStatus name"]
        }
    },
    { timestamps: true }
);

const OrderStatus = mongoose.model('OrderStatus', orderStatusSchema);
module.exports = OrderStatus;
