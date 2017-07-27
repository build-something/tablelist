const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    required: true
  }
});

let User = mongoose.model('User', userSchema)

module.exports = User;