
const Post = require('../models/postsModel');


exports.getAllPost = async (req, res) => {
    try {
        const post = await Post.find({});
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.updatePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deletePostById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: `Post with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
