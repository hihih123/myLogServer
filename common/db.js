
const mongoose = require('mongoose');

module.exports = (dbName) => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/' + dbName, { useMongoClient: true });
  const db = mongoose.connection;
  db.on('error', function(err) {
     console.log('Error : ', err);
  });
  db.on('open', function() {
     console.log('connect DB : ' + dbName);
  });
};
