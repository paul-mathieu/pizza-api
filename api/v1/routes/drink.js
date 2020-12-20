//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/drink');

//CREATE
router.post("/drink", (req, res) => {
    controller.create(req, res);
});

//READ
router.get("/drinks", (req, res) => {
    controller.reads(req, res);
});

router.get("/drink/:id", (req, res) => {
    controller.read(req, res);
});

//UPDATE
router.put("/drink/:id", (req, res) => {
    controller.update(req, res);
});

//DELETE
router.delete("/drink/:id", (req, res) => {
    controller.delete(req, res);
});

//COMPLETED
router.post("/drink/:id/done", (req, res) => {
    controller.done(req, res);
});

router.post("/drink/:id/undone", (req, res) => {
    controller.undone(req, res);
});

module.exports = router;
