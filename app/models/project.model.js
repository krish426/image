var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = mongoose.Schema({
    userId :  { type: Schema.Types.ObjectId, ref: 'User' },
    projectName : { type: String, required: true, trim: true },
    createdDate: { type: Date, default: Date.now },
    isActive : { type: Boolean, default: true },
});

module.exports = mongoose.model('Project', ProjectSchema);