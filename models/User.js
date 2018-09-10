var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {type: String, default: ''},
    password: {type: String, default: ''},
});

module.exports = mongoose.model('user', userSchema);