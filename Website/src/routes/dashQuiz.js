var express = require("express");
var router = express.Router();

var dashQuizController = require("../controllers/dashQuizController");

router.get("/listarTentativas", function (req, res) {
    dashQuizController.listarTentativas(req, res);
});

router.get("/listarAcertos", function (req, res) {
    dashQuizController.listarAcertos(req, res);
});

router.get("/listarPopular", function (req, res) {
    dashQuizController.listarPopular(req, res);
});

router.get("/listarTempo", function (req, res) {
    dashQuizController.listarTempo(req, res);
});


router.get("/listarRealizacoes", function (req, res) {
    dashQuizController.listarRealizacoes(req, res);
});

router.get("/buscarAcertosQuiz", function (req, res) {
    dashQuizController.buscarAcertosQuiz(req, res);
});

router.get("/buscarAcertosNivel", function (req, res) {
    dashQuizController.buscarAcertosNivel(req, res);
});

router.get("/listarRealizacaoNivel", function (req, res) {
    dashQuizController.listarRealizacaoNivel(req, res);
});



module.exports = router;

