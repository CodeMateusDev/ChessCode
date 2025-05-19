var historicoModel = require("../models/historicoModel");

function listar(req, res) {
    var idusuario  = req.params.idusuario

    historicoModel.listar(idusuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar
}

