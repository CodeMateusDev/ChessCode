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

function listarErros(req, res) {
    dashQuizModel.listarErros().then(function (resultado) {
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

function listarFeminino(req, res) {
    dashQuizModel.listarFeminino().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarMasculino(req, res) {
    dashQuizModel.listarMasculino().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQntFeitos(req, res) {
    dashQuizModel.listarQntFeitos().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQuiz1(req, res) {
    dashQuizModel.listarQuiz1().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQuiz2(req, res) {
    dashQuizModel.listarQuiz2().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQuiz3(req, res) {
    dashQuizModel.listarQuiz3().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarIniciante(req, res) {
    dashQuizModel.listarIniciante().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarIntermediario(req, res) {
    dashQuizModel.listarIntermediario().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarExperiente(req, res) {
    dashQuizModel.listarExperiente().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarTentativas,
    listarAcertos,
    listarErros,
    listarTempo,
    listarFeminino,
    listarMasculino,
    listarQntFeitos,
    listarQuiz1,
    listarQuiz2,
    listarQuiz3,
    listarIniciante,
    listarIntermediario,
    listarExperiente
}

