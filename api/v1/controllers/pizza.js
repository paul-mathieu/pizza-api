// Create a Pizza
function createPizza(req, res) {
    let Pizza = require('../models/pizza');
    let newPizza = Pizza ({
        name: req.body.name,
        description : req.body.description,
        price : req.body.price,
        allergen : req.body.allergen,
        bio : req.body.bio,
        vegan : req.body.vegan
    });
  
    newPizza.save()
    .then(
        (savedPizza) => {res.json(savedPizza)}, 
        (err) => {res.status(400).json(err)}
    )

}

// Read all Pizzas
function readPizzas(req, res) {
    let Pizza = require("../models/pizza");

    Pizza.find({})
    .then(
        (pizzas) => {res.status(200).json(pizzas)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Read a Pizza
function readPizza(req, res) {
    let Pizza = require("../models/pizza");

    Pizza.findById({_id : req.params.id})
    .then(
        (pizza) => {res.status(200).json(pizza)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Update a Pizza
function updatePizza(req, res) {
    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate(
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
        (updatedPizza) => {res.status(200).json(updatedPizza)}, 
        (err) => {res.status(500).json(err)}
    )
}

// Delete a Pizza
function deletePizza(req, res) {
    let Pizza = require("../models/pizza");

    Pizza.findOneAndRemove({_id : req.params.id})
    .then(
        (deletedPizza) => {res.status(200).json(deletedPizza)},
        (err) => {res.status(500).json(err)}
    )
}

// done
function done(req, res) {
    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then(
        (updatedPizza) => {res.status(200).json(updatedPizza)}, 
        (err) => {res.status(500).json(err)}
    )
}

function undone(req, res) {

    let Pizza = require("../models/pizza");

    Pizza.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then(
        (updatedPizza) => {res.status(200).json(updatedPizza)}, 
        (err) => {res.status(500).json(err)}
    )
}

module.exports.create = createPizza;
module.exports.reads = readPizzas;
module.exports.read = readPizza;
module.exports.delete = deletePizza;
module.exports.update = updatePizza;
module.exports.done = done;
module.exports.undone = undone;
