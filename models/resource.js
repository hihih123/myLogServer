
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resourceSchema = new Schema({
    local_time : { type: Date, default: Date.now  },
    com_id: String,
    cpu: { type: Number, default: -1  },
    mem: { type: Number, default: -1  },
    hdd: { type: Number, default: -1  }
});

module.exports = mongoose.model('Resource', resourceSchema);
