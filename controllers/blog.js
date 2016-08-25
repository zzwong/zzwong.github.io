/**
 * blog.js controller for /blog routes
 */

const mongoose = require('mongoose');
const Blog = require('../models/Blog');

/**
 * GET /blog
 */
exports.getBlog = (req, res) => {
  // just show all blogs for now, then show pagination...
  // only unhidden ones.
  Blog.find({hidden: false}).exec((err, blogs) => {
    if(err){
      console.log(err.errors);
    }
    if(blogs){
      console.log(blogs.length),
      res.render('blogs', {
        blogs: blogs,
      });
    } else {
      console.log("blogs not found...");
    }
  });
};

/**
 * POST /blog
 * New blog post added to db
 */
exports.postBlog = (req, res, next) => {
  const blog = new Blog ({
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
    tags: req.body.tags,
    hidden: req.body.hidden
  });
  blog.save((err) => {
    if(err ){
      return next(err);
    }
    res.redirect('/blog');
  });
}

/**
 * GET /blog/title
 * blog view by title
 */
exports.getBlogByTitle = (req, res) => {
  var blogTitle = req.params.title;
  console.log(blogTitle);
  Blog.findOne({title: blogTitle}).exec((err, blog)=>{
    if(err) {
      console.log(err.error);
      return err.error;
    }
    if(blog){
        res.render('blog', {
          blog: blog
      })
    } else {
      console.log('blog doesn\'t exist?');
    }

  });
};

// TODO
// Create an admin interface only for me >:)
// Create Update and Delete
// normal users only have Read
