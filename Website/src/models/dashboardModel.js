
var database = require("../database/config")

// function listar() {
//     var instrucao = `
//     SELECT * from quiz join usuario on fkusuario = idusuario where idusuario = 1;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao + id);
//     return database.executar(instrucao);
// }

function listar() {
    var instrucao = `
    SELECT COUNT(idusuario) as usuarios from usuario where cargo = 0;
    


    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listar
};