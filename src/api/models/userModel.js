const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter user name"]
        },
        email:{
            type: String,
            required: [true, "Please enter email"],
            // You might want to add a custom validator here to ensure the email format is correct
        },
        password:{
            type: String,
            required: [true, "Please enter password"]
            // You might want to add more validations here like minimum length, etc.
        },
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        }
    
    },
    { timestamps: true }
);



const User = mongoose.model('User', userSchema);
module.exports = User;
