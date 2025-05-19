var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.get("/listar/:idusuario", function (req, res) {
    historicoController.listar(req, res);
});

module.exports = router;