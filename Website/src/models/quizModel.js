var database = require("../database/config");

function guardar(quiz, certas, erradas, usuario, tempo, porcentagem) {
    console.log("Executando model guardar:", quiz, certas, erradas, usuario, tempo, porcentagem);
    var instrucaoSql = `
        INSERT INTO quiz (idQuiz, acertos, erros, fkusuario, tempo, porcentagem) 
        VALUES ('${quiz}', '${certas}', '${erradas}', '${usuario}', '${tempo}', '${porcentagem}');
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    guardar
};
