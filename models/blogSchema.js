const mongoose = require('mongoose');

const blogSchema  = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    }
});

const Blog = mongoose.model('BLOG', blogSchema);
module.exports = Blog;