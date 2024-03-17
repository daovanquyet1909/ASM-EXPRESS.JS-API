

const Product = require('../models/productModel');
const Post = require('../models/postModel');

exports.searchProductByName = async (req, res) => {
    try {
        const { name } = req.query;
        const products = await Product.find({ name: { $regex: new RegExp(name, "i") } });
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found with the provided name' });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.searchPostByName = async (req, res) => {
    try {
        const { title } = req.query;
        const posts = await Post.find({ title: { $regex: new RegExp(title, "i") } });
        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found with the provided title' });
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
