const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  title: String,
  detail: [String],
  priority: String,
  deadline: Date
});

// Compile the schema into a model and export it. It allow to run any CRUD opeations
module.exports = mongoose.model ('Item', itemsSchema);


