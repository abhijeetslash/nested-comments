const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    writer:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String
    },
    postId:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String
    },
    responseTo:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String
    },
    content:{
        // type: mongoose.Schema.Types.ObjectId,
        type: String
    },
},{
    timestamps: true
})

const Comment = mongoose.model( 'Comment', commentSchema );

module.exports = Comment;