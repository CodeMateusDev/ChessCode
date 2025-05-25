var express = require("express");
var router = express.Router();

var dashQuizController = require("../controllers/dashQuizController");

router.get("/listarTentativas", function (req, res) {
    dashQuizController.listarTentativas(req, res);
});

router.get("/listarAcertos", function (req, res) {
    dashQuizController.listarAcertos(req, res);
});

router.get("/listarErros", function (req, res) {
    dashQuizController.listarErros(req, res);
});

router.get("/listarTempo", function (req, res) {
    dashQuizController.listarTempo(req, res);
});

router.get("/listarFeminino", function (req, res) {
    dashQuizController.listarFeminino(req, res);
});

router.get("/listarMasculino", function (req, res) {
    dashQuizController.listarMasculino(req, res);
});

router.get("/listarQntFeitos", function (req, res) {
    dashQuizController.listarQntFeitos(req, res);
});

router.get("/listarQuiz1", function (req, res) {
    dashQuizController.listarQuiz1(req, res);
});

router.get("/listarQuiz2", function (req, res) {
    dashQuizController.listarQuiz2(req, res);
});

router.get("/listarQuiz3", function (req, res) {
    dashQuizController.listarQuiz3(req, res);
});

router.get("/listarIniciante", function (req, res) {
    dashQuizController.listarIniciante(req, res);
});

router.get("/listarIntermediario", function (req, res) {
    dashQuizController.listarIntermediario(req, res);
});

router.get("/listarExperiente", function (req, res) {
    dashQuizController.listarExperiente(req, res);
});



module.exports = router;

