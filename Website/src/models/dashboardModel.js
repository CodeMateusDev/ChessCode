var database = require("../database/config")

function listarUsuarios() {
  var instrucao = `
    SELECT COUNT(idusuario) as usuarios from usuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarQuizzes() {
  var instrucao = `
     SELECT COUNT(DISTINCT fkusuario, idQuiz) as quizzes FROM quiz join resultado on fkQuiz = idquiz join usuario on idusuario = fkusuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarQuizPopular() {
  var instrucao = `
      select count(idusuario) as soma, nivel as total from usuario  GROUP BY nivel ORDER BY soma DESC limit 1; 
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarMedia() {
  var instrucao = `
      SELECT ROUND(avg(idade)) as media FROM usuario;
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
    SELECT COUNT(DISTINCT fkusuario) as realizados FROM usuario  JOIN resultado ON idusuario = fkusuario join quiz on idquiz = fkQuiz;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarQuiz1() {
  var instrucao = `
      SELECT count(DISTINCT fkusuario) as 'QntQuiz1' from resultado join quiz on fkQuiz = idquiz where idQuiz = 1; 
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarQuiz2() {
  var instrucao = `
      SELECT count(DISTINCT fkusuario) as 'QntQuiz2' from resultado join quiz on fkQuiz = idquiz where idQuiz = 2; 
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarQuiz3() {
  var instrucao = `
      SELECT count(DISTINCT fkusuario) as 'QntQuiz3' from resultado join quiz on fkQuiz = idquiz where idQuiz = 3; 
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
  listarUsuarios,
  listarQuizzes,
  listarQuizPopular,
  listarMedia,
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