const OrderDetails = require('../models/orderDetailsModel');

exports.createorderdetails = async (req, res) => {
    try {
        const newOrderDetail = await OrderDetails.create(req.body);
        res.status(201).json(newOrderDetail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getAllorderdetails = async (req, res) => {
    try {
        const orderdetails = await OrderDetails.find({}); // Sử dụng OrderDetails.find thay vì orderdetails.find
        res.status(200).json(orderdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getorderdetailsById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderdetails = await OrderDetails.findById(id); // Sử dụng OrderDetails.findById thay vì orderdetails.findById
        res.status(200).json(orderdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateorderdetails = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedorderdetails = await OrderDetails.findByIdAndUpdate(id, req.body, { new: true }); // Sử dụng OrderDetails.findByIdAndUpdate thay vì orderdetails.findByIdAndUpdate
        res.status(200).json(updatedorderdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteorderdetails = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedorderdetails = await OrderDetails.findByIdAndDelete(id); // Sử dụng OrderDetails.findByIdAndDelete thay vì orderdetails.findByIdAndDelete
        if (!deletedorderdetails) {
            return res.status(404).json({ message: `orderdetails with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'orderdetails deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
