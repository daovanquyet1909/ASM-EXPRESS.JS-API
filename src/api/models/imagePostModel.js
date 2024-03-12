const mongoose = require('mongoose');

const imagepostSchema = mongoose.Schema(
    {
        url: {
            type: String,
            required: [true, "Please enter a url "]
        },
        title: {
            type: String,
            required: true
        },
        cloudinaryImage: {
            type: String // Lưu trữ public ID của ảnh từ Cloudinary
        },
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    },
    { timestamps: true }
);


const ImagePost = mongoose.model('ImagePost', imagepostSchema);
module.exports = ImagePost;
