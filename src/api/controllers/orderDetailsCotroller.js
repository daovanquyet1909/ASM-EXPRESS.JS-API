const orderdetails = require('../models/orderDetailsModel');


exports.getAllorderdetails = async (req, res) => {
    try {
        const orderdetails = await orderdetails.find({});
        res.status(200).json(orderdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getorderdetailsById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderdetails = await orderdetails.findById(id);
        res.status(200).json(orderdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.createorderdetails = async (req, res) => {
    try {
        const orderdetails = await orderdetails.create(req.body);
        res.status(201).json(orderdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.updateorderdetails = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedorderdetails = await orderdetails.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedorderdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deleteorderdetails = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedorderdetails = await orderdetails.findByIdAndDelete(id);
        if (!deletedorderdetails) {
            return res.status(404).json({ message: `orderdetails with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'orderdetails deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
