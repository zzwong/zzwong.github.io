const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: [String],
  comments: [{body: String, date: Date}],
  date: { type: Date, default: Date.now},
  tags: {type: [String], index: true},
  hidden: Boolean


},
{timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
