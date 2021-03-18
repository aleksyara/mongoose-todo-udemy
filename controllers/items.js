const Item = require("../models/item");
const date = require("../data");
const item = require("../models/item");

// read all data
const index = function (req, res) {
  // let day = date.getDay();
  let day = date.getDate();
  // use our Model to get everything from DB
  Item.find({}, function (err, allItems) {
    // console.log("allItems", allItems);
    // console.log('title', allItems.title);
    res.render("items/list", { listTitle: day, allItems: allItems });
  });
};

//show an Item' detail
function show(req, res) {
  Item.findById(req.params.id, function (err1, myItem) {
    if (!err1 && myItem) {
      let item = JSON.parse(JSON.stringify(myItem));
      // console.log("item ---->>>>", item);
      res.render("items/show", { item });
    } else {
      console.log("something goes wrong in Show function");
    }
  });
}

// Render new skill page
function newSkill(req, res) {
  res.render("items/new");
}

//Create new Skill and add to the db
function create(req, res) {
  // console.log('hitting the create route');

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
  show,
  new: newSkill,
  create,
  // delete: deleteOne,
  // update: updateSkills
};
