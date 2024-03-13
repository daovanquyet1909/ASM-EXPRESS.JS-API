const orderstatus = require('../models/orderStatusModel');


exports.getAllorderstatus = async (req, res) => {
    try {
        const orderstatus = await orderstatus.find({});
        res.status(200).json(orderstatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getorderstatusById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderstatus = await orderstatus.findById(id);
        res.status(200).json(orderstatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.createorderstatus = async (req, res) => {
    try {
        const orderstatus = await orderstatus.create(req.body);
        res.status(201).json(orderstatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.updateorderstatus = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedorderstatus = await orderstatus.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedorderstatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deleteorderstatus = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedorderstatus = await orderstatus.findByIdAndDelete(id);
        if (!deletedorderstatus) {
            return res.status(404).json({ message: `orderstatus with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'orderstatus deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
