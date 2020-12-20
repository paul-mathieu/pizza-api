//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/client');

//CREATE
router.post("/client", (req, res) => {
    controller.create(req, res);
});

//READ
router.get("/clients", (req, res) => {
    controller.reads(req, res);
});

router.get("/client/:id", (req, res) => {
    controller.read(req, res);
});

//UPDATE
router.put("/client/:id", (req, res) => {
    controller.update(req, res);
});

//DELETE
router.delete("/client/:id", (req, res) => {
    controller.delete(req, res);
});

//COMPLETED
router.post("/client/:id/done", (req, res) => {
    controller.done(req, res);
});

router.post("/client/:id/undone", (req, res) => {
    controller.undone(req, res);
});

module.exports = router;
