var database = require("../database/config");

function guardar(quiz, certas, erradas, usuario, tempo, porcentagem) {
    console.log("Executando model guardar:", quiz, certas, erradas, usuario, tempo, porcentagem);
    var instrucaoSql = `
        INSERT INTO resultado (fkquiz, acertos, erros, fkusuario, tempo, porcentagem, dtRealizacao) 
        VALUES ('${quiz}', '${certas}', '${erradas}', '${usuario}', '${tempo}', '${porcentagem}', CURDATE());
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    guardar
};
