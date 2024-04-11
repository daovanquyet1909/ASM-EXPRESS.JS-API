const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
    },
    { timestamps: true }
);

// Thêm text index cho trường 'name' để áp dụng tìm kiếm toàn văn bản
productSchema.index({ name: 'text' });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
