// Create a Dessert
function createDessert(req, res) {
    let Dessert = require('../models/dessert');
    let newDessert = Dessert ({
        name: req.body.name,
        description : req.body.description,
        price : req.body.price,
        allergen : req.body.allergen,
        bio : req.body.bio,
        vegan : req.body.vegan
    });
  
    newDessert.save()
    .then(
        (savedDessert) => {res.json(savedDessert)}, 
        (err) => {res.status(400).json(err)}
    )

}

// Read all Desserts
function readDesserts(req, res) {
    let Dessert = require("../models/dessert");

    Dessert.find({})
    .then(
        (desserts) => {res.status(200).json(desserts)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Read a Dessert
function readDessert(req, res) {
    let Dessert = require("../models/dessert");

    Dessert.findById({_id : req.params.id})
    .then(
        (dessert) => {res.status(200).json(dessert)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Update a Dessert
function updateDessert(req, res) {
    let Dessert = require("../models/dessert");

    Dessert.findByIdAndUpdate(
        {_id: req.params.id}, 
        {name: req.body.name,
        description : req.body.description,
        price : req.body.price,
        allergen : req.body.allergen,
        bio : req.body.bio,
        vegan : req.body.vegan}, 
        {new : true}
    )
    .then(
        (updatedDessert) => {res.status(200).json(updatedDessert)}, 
        (err) => {res.status(500).json(err)}
    )
}

// Delete a Dessert
function deleteDessert(req, res) {
    let Dessert = require("../models/dessert");

    Dessert.findOneAndRemove({_id : req.params.id})
    .then(
        (deletedDessert) => {res.status(200).json(deletedDessert)},
        (err) => {res.status(500).json(err)}
    )
}

// done
function done(req, res) {
    let Dessert = require("../models/dessert");

    Dessert.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then(
        (updatedDessert) => {res.status(200).json(updatedDessert)}, 
        (err) => {res.status(500).json(err)}
    )
}

function undone(req, res) {

    let Dessert = require("../models/dessert");

    Dessert.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then(
        (updatedDessert) => {res.status(200).json(updatedDessert)}, 
        (err) => {res.status(500).json(err)}
    )
}

module.exports.create = createDessert;
module.exports.reads = readDesserts;
module.exports.read = readDessert;
module.exports.delete = deleteDessert;
module.exports.update = updateDessert;
module.exports.done = done;
module.exports.undone = undone;
