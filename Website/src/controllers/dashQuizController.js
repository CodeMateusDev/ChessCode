var dashQuizModel = require("../models/dashQuizModel");

function listarTentativas(req, res) {
    dashQuizModel.listarTentativas().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarAcertos(req, res) {
    dashQuizModel.listarAcertos().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarPopular(req, res) {
    dashQuizModel.listarPopular().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarTempo(req, res) {
    dashQuizModel.listarTempo().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarRealizacoes(req, res) {
    dashQuizModel.listarRealizacoes().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarAcertosQuiz(req, res) {
    dashQuizModel.buscarAcertosQuiz().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarAcertosNivel(req, res) {
    dashQuizModel.buscarAcertosNivel().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarRealizacaoNivel(req, res) {
    dashQuizModel.listarRealizacaoNivel().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    listarTentativas,
    listarAcertos,
    listarPopular,
    listarTempo,
    listarRealizacoes,
    buscarAcertosQuiz,
    buscarAcertosNivel,
    listarRealizacaoNivel
}

