var dashboardModel = require("../models/dashboardModel");

function listarUsuarios(req, res) {
    dashboardModel.listarUsuarios().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQuizzes(req, res) {
    dashboardModel.listarQuizzes().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQuizPopular(req, res) {
    dashboardModel.listarQuizPopular().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarMedia(req, res) {
    dashboardModel.listarMedia().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarFeminino(req, res) {
    dashboardModel.listarFeminino().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarMasculino(req, res) {
    dashboardModel.listarMasculino().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQntFeitos(req, res) {
    dashboardModel.listarQntFeitos().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQuiz1(req, res) {
    dashboardModel.listarQuiz1().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQuiz2(req, res) {
    dashboardModel.listarQuiz2().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarQuiz3(req, res) {
    dashboardModel.listarQuiz3().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarIniciante(req, res) {
    dashboardModel.listarIniciante().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarIntermediario(req, res) {
    dashboardModel.listarIntermediario().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarExperiente(req, res) {
    dashboardModel.listarExperiente().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarUsuarios,
    listarQuizzes,
    listarQuizPopular,
    listarMedia,
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

