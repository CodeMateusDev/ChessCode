var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listarUsuarios", function (req, res) {
    dashboardController.listarUsuarios(req, res);
});

router.get("/listarQuizzes", function (req, res) {
    dashboardController.listarQuizzes(req, res);
});

router.get("/listarQuizPopular", function (req, res) {
    dashboardController.listarQuizPopular(req, res);
});

router.get("/listarMedia", function (req, res) {
    dashboardController.listarMedia(req, res);
});

router.get("/listarFeminino", function (req, res) {
    dashboardController.listarFeminino(req, res);
});

router.get("/listarMasculino", function (req, res) {
    dashboardController.listarMasculino(req, res);
});

router.get("/listarQntFeitos", function (req, res) {
    dashboardController.listarQntFeitos(req, res);
});

router.get("/listarQuiz1", function (req, res) {
    dashboardController.listarQuiz1(req, res);
});

router.get("/listarQuiz2", function (req, res) {
    dashboardController.listarQuiz2(req, res);
});

router.get("/listarQuiz3", function (req, res) {
    dashboardController.listarQuiz3(req, res);
});

router.get("/listarIniciante", function (req, res) {
    dashboardController.listarIniciante(req, res);
});

router.get("/listarIntermediario", function (req, res) {
    dashboardController.listarIntermediario(req, res);
});

router.get("/listarExperiente", function (req, res) {
    dashboardController.listarExperiente(req, res);
});

module.exports = router;

