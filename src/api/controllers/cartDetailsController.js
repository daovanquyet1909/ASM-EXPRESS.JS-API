const cartdetails = require('../models/cartDetailsModel');


exports.getAllcartdetails = async (req, res) => {
    try {
        const cartdetails = await cartdetails.find({});
        res.status(200).json(cartdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getcartdetailsById = async (req, res) => {
    try {
        const { id } = req.params;
        const cartdetails = await cartdetails.findById(id);
        res.status(200).json(cartdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.createcartdetails = async (req, res) => {
    try {
        const cartdetails = await cartdetails.create(req.body);
        res.status(201).json(cartdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.updatecartdetails = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedcartdetails = await cartdetails.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedcartdetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deletecartdetails = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedcartdetails = await cartdetails.findByIdAndDelete(id);
        if (!deletedcartdetails) {
            return res.status(404).json({ message: `cartdetails with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'cartdetails deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
