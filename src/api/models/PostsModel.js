const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Please enter a product name"]
        },
        quantity:{
            type: Number,
            required: true,
            default: 0
        },
        price:{
            type: Number,
            required: true
        },
        description:{
            type: String,
            required:false,

        },
        image:{
            type: String,
            required: false
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
