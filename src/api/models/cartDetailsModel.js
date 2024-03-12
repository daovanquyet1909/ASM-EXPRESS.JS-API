const mongoose = require('mongoose');

const cartdetailsSchema = mongoose.Schema(
    {
        quantity:{
            type: Number,
            required: false,
        },
        cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart'
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
    },
    { timestamps: true }
);

const CartDetails = mongoose.model('CartDetails', cartdetailsSchema);
module.exports = CartDetails;
