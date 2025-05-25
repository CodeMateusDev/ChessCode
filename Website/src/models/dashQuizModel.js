var database = require("../database/config")

function listarTentativas() {
    var instrucao = `
    select count(idregistro) as tentativa from quiz where idQuiz = 1;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarAcertos() {
    var instrucao = `
    select avg(acertos) as acertos from quiz where idQuiz = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarErros() {
    var instrucao = `
    select avg(erros) as erros from quiz where idQuiz = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarTempo() {
    var instrucao = `
      SELECT sum(tempo) as tempo from quiz where idQuiz = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarFeminino() {
    var instrucao = `
      select COUNT(idusuario) as feminino from usuario where sexo = 'feminino';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarMasculino() {
    var instrucao = `
      select COUNT(idusuario) as masculino from usuario where sexo = 'masculino';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQntFeitos() {
    var instrucao = `
      SELECT COUNT(DISTINCT fkusuario) as realizados FROM QUIZ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQuiz1() {
    var instrucao = `
      SELECT count(idregistro) as 'QntQuiz1' from quiz where idQuiz = 1; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQuiz2() {
    var instrucao = `
      SELECT count(idregistro) as 'QntQuiz2' from quiz where idQuiz = 2; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQuiz3() {
    var instrucao = `
      SELECT count(idregistro) as 'QntQuiz3' from quiz where idQuiz = 3; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarIniciante() {
    var instrucao = `

    SELECT COUNT(nivel) as iniciante from usuario where nivel = 'iniciante';

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarIntermediario() {
    var instrucao = `

    SELECT COUNT(nivel) as intermediario from usuario where nivel = 'intermediario';

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarExperiente() {
    var instrucao = `

    SELECT COUNT(nivel) as experiente from usuario where nivel = 'experiente';

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
};