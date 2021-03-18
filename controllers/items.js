const Item = require("../models/item");
const date = require("../data");

const index = function (req, res) {
  // let day = date.getDay();
  let day = date.getDate();
  // passing the data to the page "list" inside JSON
  // res.render("items/list", { listTitle: day, newListItems: Item.getAll() });
  // use our Model to get everything from DB
  Item.find({}, function (err, allItems) {
    console.log("allItems", allItems);
    console.log('title', allItems.title);
    
    res.render("items/list", { listTitle: day, allItems: allItems });
  });
};

// function show (req, res) {
//     res.render('items/show', {
//       Todo: Item.getOne(req.params.id),
//       todoNum: req.params.id // I need to Correct this!!!!!
//   });
// }

function newSkill(req, res) {
  res.render("items/new");
}

function create(req, res) {
  // console.log('hitting the create route');
  // console.log(req.body, "<---------------- req.body");
  // split if it's not an empty string, split method reurns aray
  if (req.body.detail) {
    req.body.detail = req.body.detail.split(",");
  }
  // The model is responsible for creating data
  Item.create(req.body, function (err, createdItem) {
    console.log("created item --->", createdItem);
    if (err) res.render("/items/new");
    res.redirect("/items");
  });
}

// function deleteOne(req, res) {
//   console.log(req.params, "<-------params in delete")
//   Item.delete(req.params.id);
//   res.redirect('/items')
// }

// function updateSkills(req, res) {
//   console.log(req.params, "<-------params in updating")
//   Item.update(req.params.id);
//   res.render('items/list')
// }

module.exports = {
  index: index,
  // show,
  new: newSkill,
  create,
  // delete: deleteOne,
  // update: updateSkills
};
