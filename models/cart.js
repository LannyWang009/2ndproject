const mongoose = require('mongoose')

var cartSchema = mongoose.Schema({
  title: String,
  price: String
})

module.exports = mongoose.model('Cart', cartSchema)