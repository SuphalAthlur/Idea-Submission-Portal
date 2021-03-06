const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Post = mongoose.model('post', postSchema);
module.exports = Post;