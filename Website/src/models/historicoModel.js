var database = require("../database/config")

function listar(id) {
    var instrucao = `
    SELECT * from quiz join resultado on fkquiz = idquiz JOIN usuario on fkusuario =  idusuario where fkusuario =  ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao + id);
    return database.executar(instrucao);
}

module.exports = {
    listar
};


