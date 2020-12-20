// Create a Drink
function createDrink(req, res) {
    let Drink = require('../models/drink');
    let newDrink = Drink ({
        name: req.body.name,
        description : req.body.description,
        price : req.body.price,
        allergen : req.body.allergen,
        bio : req.body.bio,
        vegan : req.body.vegan
    });
  
    newDrink.save()
    .then(
        (savedDrink) => {res.json(savedDrink)}, 
        (err) => {res.status(400).json(err)}
    )

}

// Read all Drinks
function readDrinks(req, res) {
    let Drink = require("../models/drink");

    Drink.find({})
    .then(
        (drinks) => {res.status(200).json(drinks)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Read a Drink
function readDrink(req, res) {
    let Drink = require("../models/drink");

    Drink.findById({_id : req.params.id})
    .then(
        (drink) => {res.status(200).json(drink)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Update a Drink
function updateDrink(req, res) {
    let Drink = require("../models/drink");

    Drink.findByIdAndUpdate(
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
        (updatedDrink) => {res.status(200).json(updatedDrink)}, 
        (err) => {res.status(500).json(err)}
    )
}

// Delete a Drink
function deleteDrink(req, res) {
    let Drink = require("../models/drink");

    Drink.findOneAndRemove({_id : req.params.id})
    .then(
        (deletedDrink) => {res.status(200).json(deletedDrink)},
        (err) => {res.status(500).json(err)}
    )
}

// done
function done(req, res) {
    let Drink = require("../models/drink");

    Drink.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then(
        (updatedDrink) => {res.status(200).json(updatedDrink)}, 
        (err) => {res.status(500).json(err)}
    )
}

function undone(req, res) {

    let Drink = require("../models/drink");

    Drink.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then(
        (updatedDrink) => {res.status(200).json(updatedDrink)}, 
        (err) => {res.status(500).json(err)}
    )
}

module.exports.create = createDrink;
module.exports.reads = readDrinks;
module.exports.read = readDrink;
module.exports.delete = deleteDrink;
module.exports.update = updateDrink;
module.exports.done = done;
module.exports.undone = undone;
