const cart = require('../models/cartModel');


exports.getAllcarts = async (req, res) => {
    try {
        const carts = await cart.find({});
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getcartById = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await cart.findById(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.createcart = async (req, res) => {
    try {
        const cart = await cart.create(req.body);
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.updatecart = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedcart = await cart.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedcart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deletecart = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedcart = await cart.findByIdAndDelete(id);
        if (!deletedcart) {
            return res.status(404).json({ message: `cart with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'cart deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
