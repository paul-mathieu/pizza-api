// Create a Order
function createOrder(req, res) {
    let Order = require('../models/order');
    let newOrder = Order ({
        pizza: req.body.pizza,
        size : req.body.size,
        extras : req.body.extras,
        drink : req.body.drink,
        dessert : req.body.dessert,
        date : req.body.date
    });
  
    newOrder.save()
    .then(
        (savedOrder) => {res.json(savedOrder)}, 
        (err) => {res.status(400).json(err)}
    )

}

// Read all Orders
function readOrders(req, res) {
    let Order = require("../models/order");

    Order.find({})
    .then(
        (orders) => {res.status(200).json(orders)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Read a Order
function readOrder(req, res) {
    let Order = require("../models/order");

    Order.findById({_id : req.params.id})
    .then(
        (order) => {res.status(200).json(order)}, 
        (err) => {res.status(500).json(err)}
    )
 }

// Update a Order
function updateOrder(req, res) {
    let Order = require("../models/order");

    Order.findByIdAndUpdate(
        {_id: req.params.id}, 
        {pizza: req.body.pizza,
        size : req.body.size,
        extras : req.body.extras,
        drink : req.body.drink,
        dessert : req.body.dessert,
        date : req.body.date}, 
        {new : true}
    )
    .then(
        (updatedOrder) => {res.status(200).json(updatedOrder)}, 
        (err) => {res.status(500).json(err)}
    )
}

// Delete a Order
function deleteOrder(req, res) {
    let Order = require("../models/order");

    Order.findOneAndRemove({_id : req.params.id})
    .then(
        (deletedOrder) => {res.status(200).json(deletedOrder)},
        (err) => {res.status(500).json(err)}
    )
}

// done
function done(req, res) {
    let Order = require("../models/order");

    Order.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then(
        (updatedOrder) => {res.status(200).json(updatedOrder)}, 
        (err) => {res.status(500).json(err)}
    )
}

function undone(req, res) {

    let Order = require("../models/order");

    Order.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then(
        (updatedOrder) => {res.status(200).json(updatedOrder)}, 
        (err) => {res.status(500).json(err)}
    )
}

module.exports.create = createOrder;
module.exports.reads = readOrders;
module.exports.read = readOrder;
module.exports.delete = deleteOrder;
module.exports.update = updateOrder;
module.exports.done = done;
module.exports.undone = undone;
