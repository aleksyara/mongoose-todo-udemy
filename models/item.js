const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  title: String,
  detail: [String],
  priority: String,
  deadline: Date
});

// Compile the schema into a model and export it
module.exports = mongoose.model ('Item', itemsSchema);

// module.exports = {
//   getAll,
//   getOne,
//   create,
//   delete: deleteOne,
//   update: updateOne,
// };

// function getAll() {
//   return myItems;
// }

// function getOne(id) {
//   // Use the Array.prototype.find iterator method
//   return myItems.find((item) => item.id === parseInt(id));
// }

// function create(req, res) {
//   console.log("this is req --->>", req);

//   let item = req.newTodo;
//   console.log("Check 2 This is item -->> ".item);

//   myItems.push(item);
// }

// function deleteOne(id) {
//   const idx = myItems.findIndex((skill) => skill.id === parseInt(id));
//   myItems.splice(idx, 1);
// }

// function updateOne(id) {
//   const idx = myItems.findIndex((skill) => skill.id === parseInt(id));
//   myItems.splice(idx, 1);
// }
