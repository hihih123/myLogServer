
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var computerSchema = new Schema({
    com_id: String,
    name: String,
    reg_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('Computer', computerSchema);
