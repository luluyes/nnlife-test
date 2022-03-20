const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  making_time:{
    type: String,
    required: true
  },
  serves:{
    type: String,
    required: true
  },
  ingredients:{
    type: String,
    required: true
  },
  cost:{
    type: String,
    required: true
  }}, {
    timestamps: true
  }
)

module.exports = mongoose.model('Recipe', goalSchema)