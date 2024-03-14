const mongoose = require('mongoose');

const orderdetailsSchema = mongoose.Schema(
    {
        
        quantity:{
            type: Number,
            required: false,
        },
       
        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        subtotal:{
            type: Number,
            required: false,
        },
        
    },
    { timestamps: true }
);

const OrderDetails = mongoose.model('OrderDetails', orderdetailsSchema);
module.exports = OrderDetails;
