// Create a Extra
function createExtra(req, res) {
    let Extra = require('../models/extra');
    let newExtra = Extra ({
        name: req.body.name,
        description : req.body.description,
        price : req.body.price,
        allergen : req.body.allergen,
        bio : req.body.bio,
        vegan : req.body.vegan
    });
  
    newExtra.save()
    .then(
        (savedExtra) => {res.json(savedExtra)}, 
        (err) => {res.status(400).json(err)}
    )

}

// Read all Extras
function readExtras(req, res) {
    let Extra = require("../models/extra");

    Extra.find({})
    .then(
        (extras) => {res.status(200).json(extras)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Read a Extra
function readExtra(req, res) {
    let Extra = require("../models/extra");

    Extra.findById({_id : req.params.id})
    .then(
        (extra) => {res.status(200).json(extra)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Update a Extra
function updateExtra(req, res) {
    let Extra = require("../models/extra");

    Extra.findByIdAndUpdate(
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
        (updatedExtra) => {res.status(200).json(updatedExtra)}, 
        (err) => {res.status(500).json(err)}
    )
}

// Delete a Extra
function deleteExtra(req, res) {
    let Extra = require("../models/extra");

    Extra.findOneAndRemove({_id : req.params.id})
    .then(
        (deletedExtra) => {res.status(200).json(deletedExtra)},
        (err) => {res.status(500).json(err)}
    )
}

// done
function done(req, res) {
    let Extra = require("../models/extra");

    Extra.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then(
        (updatedExtra) => {res.status(200).json(updatedExtra)}, 
        (err) => {res.status(500).json(err)}
    )
}

function undone(req, res) {

    let Extra = require("../models/extra");

    Extra.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then(
        (updatedExtra) => {res.status(200).json(updatedExtra)}, 
        (err) => {res.status(500).json(err)}
    )
}

module.exports.create = createExtra;
module.exports.reads = readExtras;
module.exports.read = readExtra;
module.exports.delete = deleteExtra;
module.exports.update = updateExtra;
module.exports.done = done;
module.exports.undone = undone;
