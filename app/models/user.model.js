var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({

    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    status: { type: Boolean, default: true },
    acceptTerms: { type: Boolean, default: true },
    createdDate: { type: Date, default: Date.now },

});

module.exports = mongoose.model('User', UserSchema);