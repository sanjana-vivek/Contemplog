const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  image: String,
  content: String
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
