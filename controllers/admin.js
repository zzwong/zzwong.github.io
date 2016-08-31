const mongoose = require('mongoose');
const Blog = require('../models/Blog');


exports.getLogin = (req, res) => {
  res.render('/admin/login');
};
