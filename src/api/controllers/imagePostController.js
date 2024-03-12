
const ImagePost = require('../models/imagePostModel');
const cloudinary = require("../../config/cloudinaryConfig");

exports.getAllImagePost = async (req, res) => {
    try {
        const imagepost = await ImagePost.find({});
        res.status(200).json(imagepost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getImagePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const imagepost = await ImagePost.findById(id);
        res.status(200).json(imagepost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




exports.createImagePost = async (req, res) => {
    try {
        let imagepost;
        if (req.body.cloudinaryImage) {
            // Nếu có public ID của ảnh từ Cloudinary, sử dụng nó
            imagepost = await ImagePost.create({
                cloudinaryImage: req.body.cloudinaryImage,
                title: req.body.title, // hoặc thay bằng thông tin title bạn mong muốn lưu
                post: req.body.post
            });
        } else {
            // Nếu không, tạo mới ảnh trong cơ sở dữ liệu và lưu thông tin về ảnh
            const image = await cloudinary.uploader.upload(req.body.url);
            imagepost = await ImagePost.create({
                url: image.secure_url,
                cloudinaryImage: image.public_id,
                title: req.body.title, // hoặc thay bằng thông tin title bạn mong muốn lưu
                post: req.body.post
            });
        }
        res.status(201).json(imagepost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateImagePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedImagePost = await ImagePost.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedImagePost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deleteImagePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedImagePost = await ImagePost.findByIdAndDelete(id);
        if (!deletedImagePost) {
            return res.status(404).json({ message: `ImagePost with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'ImagePost deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
