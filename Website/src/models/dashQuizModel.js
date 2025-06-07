var database = require("../database/config")

function listarTentativas() {
  var instrucao = `
    select count(idResultado) as tentativa from quiz join resultado on fkQuiz = idquiz where idQuiz = 1;
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

function listarQntIntermediario() {
  var instrucao = `
    select count(idregistro) as intermediario from quiz join usuario on idusuario = fkusuario  where nivel = 'intermediario' and idquiz = 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarQntIniciante() {
  var instrucao = `
          select count(idregistro) as iniciante from quiz join usuario on idusuario = fkusuario  where nivel = 'iniciante' and idquiz = 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarQntExperiente() {
  var instrucao = `
          select count(idregistro) as experiente from quiz join usuario on idusuario = fkusuario  where nivel = 'experiente' and idquiz = 1;
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
  listarQntIntermediario,
  listarQntIniciante,
  listarQntExperiente,
  listarQuiz3,
  listarIniciante,
  listarIntermediario,
  listarExperiente
};