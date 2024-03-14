const OrderStatus = require('../models/orderStatusModel');

exports.getAllOrderStatus = async (req, res) => {
    try {
        const orderStatus = await OrderStatus.find({});
        res.status(200).json(orderStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getOrderStatusById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderStatus = await OrderStatus.findById(id);
        res.status(200).json(orderStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.createOrderStatus = async (req, res) => {
    try {
        const orderStatus = await OrderStatus.create(req.body);
        res.status(201).json(orderStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrderStatus = await OrderStatus.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedOrderStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deleteOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrderStatus = await OrderStatus.findByIdAndDelete(id);
        if (!deletedOrderStatus) {
            return res.status(404).json({ message: `OrderStatus with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'OrderStatus deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
