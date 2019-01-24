const mongoose = require('mongoose')

var cartSchema = mongoose.Schema({
  title: String,
  price: String
})

// var cartSchema = mongoose.Schema({
//   type:mongoose.Schema.Types.ObjectId,
//   ref:'Movie'
// })


module.exports = mongoose.model('Cart', cartSchema)