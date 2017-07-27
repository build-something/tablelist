const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  employee: {
    type: String,
    require: true
  }
});

let Employee = mongoose.model('Employee', userSchema)

module.exports = Employee;