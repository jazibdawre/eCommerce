const mongoose = require('mongoose');

const Category = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('Category', Category);
