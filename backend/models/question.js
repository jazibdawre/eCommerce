const mongoose = require('mongoose');

const Question = new mongoose.Schema({
  msg: {
    type: String,
    default: '',
  },
  level: {
    type: String,
    default: '',
  },
  index: {
    type: String,
    default: '',
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model('Question', Question);
