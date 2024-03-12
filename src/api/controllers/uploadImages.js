const cloudinary = require("../../config/cloudinaryConfig");
const ImagePost = require('../models/imagePostModel');

const uploadImages = async (req, res) => {
    try {
        const images = req.files.map((file) => file.path);
        const uploadedImages = [];

        for (let image of images) {
            const results = await cloudinary.uploader.upload(image);
            uploadedImages.push({
                url: results.secure_url,
                publicId: results.public_id
            });

            // Tạo mới một ImagePost trong cơ sở dữ liệu với thông tin từ Cloudinary
            await ImagePost.create({
                url: results.secure_url,
                cloudinaryImage: results.public_id,
                title: req.body.title // hoặc thay bằng thông tin title bạn mong muốn lưu
            });
        }

        return res.status(200).json({
            message: "Uploaded images successfully!",
            data: uploadedImages
        });
    } catch (error) {
        return res.status(400).json({
            name: error.name,
            message: error.message
        });
    }
};

module.exports = { uploadImages };