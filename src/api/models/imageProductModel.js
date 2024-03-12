const mongoose = require('mongoose');

const imageProductSchema = mongoose.Schema(
    {
        url: {
            type: String,
            required: [true, "Please enter a url "]
        },
        
        cloudinaryImage: {
            type: String // Lưu trữ public ID của ảnh từ Cloudinary
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    },
    { timestamps: true }
);


const ImageProduct = mongoose.model('ImageProduct', imageProductSchema);
module.exports = ImageProduct;
