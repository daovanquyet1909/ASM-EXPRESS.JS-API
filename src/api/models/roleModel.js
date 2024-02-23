const mongoose = require('mongoose');

const roleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a role name"]
        }
    },
    { timestamps: true }
);

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;
