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

function buscarAcertosNivel() {
  var instrucao = `
    select 
    (select round(avg (acertos), 0) from resultado join usuario on fkusuario = idusuario where nivel = 'iniciante')as iniciante,
    (select round(avg (acertos), 0) from resultado join usuario on fkusuario = idusuario where nivel = 'intermediario') as intermediario,
    (select round(avg (acertos), 0) from resultado join usuario on fkusuario = idusuario where nivel = 'experiente') as experiente;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarRealizacaoNivel() {
  var instrucao = `
      select 
(select count(idresultado) from resultado join usuario on fkusuario = idusuario where nivel = 'iniciante')as iniciante,
(select count(idResultado) from resultado join usuario on fkusuario = idusuario where nivel = 'intermediario') as intermediario,
(select count(idResultado) from resultado join usuario on fkusuario = idusuario where nivel = 'experiente') as experiente;

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
  buscarAcertosNivel,
  listarRealizacaoNivel,
};