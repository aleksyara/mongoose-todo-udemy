const Item = require("../models/item");
const date = require("../data");
const item = require("../models/item");
const { response } = require("express");
// const item = require("../models/item");

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

function deleteOne(req, res) {

  Item.deleteOne(req.params._id, function(err, response){
    if (err) return res.status(500).send(err);
      console.log("this is res -->>", response);
      console.log("this is err ->>>>", err)
      res.redirect('/items');
  });
  // console.log("req.body", req.body);
  // Item.findByIdAndRemove(req.params._id, (err, itemToRemove) => {
  //   if (err) return res.status(500).send(err);
  //   const response = {
  //     message: "items successfully deleted",
  //     id: item._id
  //   };
  //   res.redirect('/items');
  // });
}
// {
//   console.log('Chekpoint 1');
//   // console.log('req.body -->', req.body);
//   // console.log(req.params, "<-------params in delete")
//   // console.log('req.params._id', req.params._id);

//   // // Item.findById()

//   // Item.delete(req.params._id);
//   res.redirect('/')
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
  delete: deleteOne,
  // update: updateSkills
};
