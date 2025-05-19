var quizModel = require("../models/quizModel");

function guardar(req, res) {
    var quiz = req.body.quizServer;
    var certas = req.body.certasServer;
    var erradas = req.body.erradasServer;
    var usuario = req.body.usuarioServer;
    var tempo = req.body.contadorServer;
    var porcentagem = req.body.porcentagemServer;

    quizModel.guardar(quiz, certas, erradas, usuario, tempo, porcentagem)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    guardar
};
