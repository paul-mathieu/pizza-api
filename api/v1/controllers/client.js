// Create a Client
function createClient(req, res) {
    let Client = require('../models/client');
    let newClient = Client ({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        orders: req.body.orders,
        history: req.body.history,
        status: req.body.status
    });
  
    newClient.save()
    .then(
        (savedClient) => {res.json(savedClient)}, 
        (err) => {res.status(400).json(err)}
    )

}

// Read all Clients
function readClients(req, res) {
    let Client = require("../models/client");

    Client.find({})
    .then(
        (clients) => {res.status(200).json(clients)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Read a Client
function readClient(req, res) {
    let Client = require("../models/client");

    Client.findById({_id : req.params.id})
    .then(
        (client) => {res.status(200).json(client)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Update a Client
function updateClient(req, res) {
    let Client = require("../models/client");

    Client.findByIdAndUpdate(
        {_id: req.params.id}, 
        {name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        orders: req.body.orders,
        history: req.body.history,
        status: req.body.status}, 
        {new : true}
    )
    .then(
        (updatedClient) => {res.status(200).json(updatedClient)}, 
        (err) => {res.status(500).json(err)}
    )
}

// Delete a Client
function deleteClient(req, res) {
    let Client = require("../models/client");

    Client.findOneAndRemove({_id : req.params.id})
    .then(
        (deletedClient) => {res.status(200).json(deletedClient)},
        (err) => {res.status(500).json(err)}
    )
}

// done
function done(req, res) {
    let Client = require("../models/client");

    Client.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then(
        (updatedClient) => {res.status(200).json(updatedClient)}, 
        (err) => {res.status(500).json(err)}
    )
}

function undone(req, res) {

    let Client = require("../models/client");

    Client.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then(
        (updatedClient) => {res.status(200).json(updatedClient)}, 
        (err) => {res.status(500).json(err)}
    )
}

module.exports.create = createClient;
module.exports.reads = readClients;
module.exports.read = readClient;
module.exports.delete = deleteClient;
module.exports.update = updateClient;
module.exports.done = done;
module.exports.undone = undone;
