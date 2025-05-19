
var database = require("../database/config")

function listar(id) {
    var instrucao = `
    SELECT * from quiz join usuario on fkusuario = idusuario where idusuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao + id);
    return database.executar(instrucao);
}

module.exports = {
    listar
};


