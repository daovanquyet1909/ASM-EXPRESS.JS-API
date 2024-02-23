const Category = require('../models/categoryModel');

// Controller để lấy tất cả loại sản phẩm
exports.getAllCategory = async (req, res) => {
    try {
        const categorys = await Category.find({});
        res.status(200).json(categorys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller để lấy một sản phẩm dựa trên ID
exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller để tạo một sản phẩm mới
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller để cập nhật thông tin của một sản phẩm dựa trên ID
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller để xóa một sản phẩm dựa trên ID
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: `Category with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
