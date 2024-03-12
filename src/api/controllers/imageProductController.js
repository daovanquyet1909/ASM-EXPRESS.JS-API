const ImageProduct = require('../models/imageProductModel');
const cloudinary = require("../../config/cloudinaryConfig");

exports.getAllImageProduct = async (req, res) => {
    try {
        const imageProducts = await ImageProduct.find({});
        res.status(200).json(imageProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getImageProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const imageProduct = await ImageProduct.findById(id);
        res.status(200).json(imageProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




exports.createImageProduct = async (req, res) => {
    try {
        let imageProduct;
        if (req.body.cloudinaryImage) {
            // Nếu có public ID của ảnh từ Cloudinary, sử dụng nó
            imageProduct = await ImageProduct.create({
                cloudinaryImage: req.body.cloudinaryImage,
                product: req.body.product // Thêm ID của sản phẩm vào đây
            });
        } else {
            // Nếu không, tạo mới ảnh trong cơ sở dữ liệu và lưu thông tin về ảnh
            const image = await cloudinary.uploader.upload(req.body.url);
            imageProduct = await ImageProduct.create({
                url: image.secure_url,
                cloudinaryImage: image.public_id,
                product: req.body.product // Thêm ID của sản phẩm vào đây
            });
        }
        res.status(201).json(imageProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.updateImageProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedImageProduct = await ImageProduct.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedImageProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deleteImageProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedImageProduct = await ImageProduct.findByIdAndDelete(id);
        if (!deletedImageProduct) {
            return res.status(404).json({ message: `ImageProduct with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'ImageProduct deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
