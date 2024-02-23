const User = require('../models/userModel')

// Controller để lấy tất cả user 
exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller User by id
exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller create User
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller update user
exports.updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUserById = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedUserById);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller delete by id user
exports.deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUserById = await User.findByIdAndDelete(id);
        if (!deletedUserById) {
            return res.status(404).json({ message: `User with ID ${id} does not exist` });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
