const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/items', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('disconnected', function () {
  console.log(`Disconnected to MongoDB at ${db.host}:${db.port}`);
});