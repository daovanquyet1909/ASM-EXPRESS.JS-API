const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Please enter a product name"]
        },
        quantity:{
            type: Number,
            required: true,
            default: 0
        },
        price:{
            type: Number,
            required: true
        },
        description:{
            type: String,
            required:false,

        },
       
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
        
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
