var database = require("../database/config")

function listarTentativas() {
  var instrucao = `
    select count(idResultado) as tentativa from resultado;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarAcertos() {
  var instrucao = `
    select ROUND(avg(acertos),0) as acertos from resultado ;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarPopular() {
  var instrucao = `
    select fkquiz as popular,count(*) as dados from resultado group by fkquiz ORDER BY dados DESC limit 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarTempo() {
  var instrucao = `
    SELECT round(avg(tempo),0) as tempo from resultado;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarRealizacoes() {
  var instrucao = `
    select 
    (select count(idresultado) as 'qntQuiz1' from resultado where fkquiz = 1)as quiz1,
    (select count(idresultado) as 'qntQuiz1' from resultado where fkquiz = 2) as quiz2,
    (select count(idresultado) as 'qntQuiz1' from resultado where fkquiz = 3) as quiz3;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function buscarAcertosQuiz() {
  var instrucao = `
      select 
      (select round(avg (acertos), 0) from resultado where fkQuiz = 1)as quiz1,
      (select round(avg (acertos), 0) from resultado where fkQuiz = 2) as quiz2,
      (select round(avg (acertos), 0) from resultado where fkQuiz = 3) as quiz3;
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
  listarPopular,
  listarTempo,
  listarRealizacoes,
  buscarAcertosQuiz,
  listarQntIntermediario,
  listarQntIniciante,
  listarQntExperiente,
  listarQuiz3,
  listarIniciante,
  listarIntermediario,
  listarExperiente
};