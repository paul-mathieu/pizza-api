//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/dessert');

//CREATE
router.post("/dessert", (req, res) => {
    controller.create(req, res);
});

//READ
router.get("/desserts", (req, res) => {
    controller.reads(req, res);
});

router.get("/dessert/:id", (req, res) => {
    controller.read(req, res);
});

//UPDATE
router.put("/dessert/:id", (req, res) => {
    controller.update(req, res);
});

//DELETE
router.delete("/dessert/:id", (req, res) => {
    controller.delete(req, res);
});

//COMPLETED
router.post("/dessert/:id/done", (req, res) => {
    controller.done(req, res);
});

router.post("/dessert/:id/undone", (req, res) => {
    controller.undone(req, res);
});

module.exports = router;
