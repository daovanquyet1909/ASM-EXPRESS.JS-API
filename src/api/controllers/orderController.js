const order = require('../models/orderModel');


exports.getAllorders = async (req, res) => {
    try {
        const order = await order.find({});
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getorderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.createorder = async (req, res) => {
    try {
        const order = await order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.updateorder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedorder = await order.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedorder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deleteorder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedorder = await order.findByIdAndDelete(id);
        if (!deletedorder) {
            return res.status(404).json({ message: `order with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
