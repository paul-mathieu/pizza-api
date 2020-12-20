//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/extra');

//CREATE
router.post("/extra", (req, res) => {
    controller.create(req, res);
});

//READ
router.get("/extras", (req, res) => {
    controller.reads(req, res);
});

router.get("/extra/:id", (req, res) => {
    controller.read(req, res);
});

//UPDATE
router.put("/extra/:id", (req, res) => {
    controller.update(req, res);
});

//DELETE
router.delete("/extra/:id", (req, res) => {
    controller.delete(req, res);
});

//COMPLETED
router.post("/extra/:id/done", (req, res) => {
    controller.done(req, res);
});

router.post("/extra/:id/undone", (req, res) => {
    controller.undone(req, res);
});

module.exports = router;
