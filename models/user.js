const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

var UserSchema = new mongoose.Schema({
  username: String,
  useremail: String,
  password: String,
  carts: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }] // this is to do an object ref between Movie Collection and User Collection.
})

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)
