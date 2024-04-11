const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:[true, "Please enter a product name"]
        },
        introduction:{
            type: String,
            required: true,
            
        },
        body:{
            type: String,
            required: true
        },
        conclusion:{
            type: String,
            required:true,

        },
        image: {
            type: String,
            required: false,
        },
       
        
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }
);

postSchema.index({ title: 'text' });
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
