-- Active: 1747516402911@@127.0.0.1@3306@chesscode

CREATE DATABASE chesscode;

USE chesscode;


create table usuario(
    idusuario int primary key AUTO_INCREMENT,
    nome VARCHAR(40),
    email VARCHAR(100),
    senha VARCHAR(45),
    sexo VARCHAR(9),
    cargo VARCHAR(13),
    idade int,
    nivel varchar(45)
);

CREATE TABLE resultado(
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    acertos int,
    erros int,
    fkusuario int,
    fkQuiz int,
    tempo int,
    porcentagem INT,
    dtRealizacao date,
    Foreign Key (fkquiz) REFERENCES quiz(idquiz),
    Foreign Key (fkusuario) REFERENCES usuario(idusuario)
);

CREATE TABLE quiz(
    idquiz int PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(40),
    dificuldade varchar(20)
);

insert into quiz VALUES
(DEFAULT,'A história do xadrez', 'Fácil'),
(DEFAULT,'Campeões e partidas marcantes', 'Médio'),
(DEFAULT,'Estratégias e aberturas do xadrez','Díficil');

CREATE TABLE QUIZ(
    idRegistro INT PRIMARY KEY AUTO_INCREMENT,
    idQuiz int,
    acertos int,
    erros int,
    fkusuario int,
    tempo int, 
    porcentagem INT,
    dtRealizacao date,
    Foreign Key (fkusuario) REFERENCES usuario(idusuario)
);

SELECT count(DISTINCT fkusuario) as 'QntQuiz1' from resultado join quiz on fkQuiz = idquiz where idQuiz = 1; 

insert into usuario VALUES
(DEFAULT,'admin','admin', 'admin','masculino',1,10,'experiente');
(DEFAULT,'asjdoidoiahdoisas','asjdoidoiahdoisas', 'asjdoidoiahdoisas','feminino',1,10,'Intermediario');

select * from usuario;

insert into usuario values
(DEFAULT, 'slkfjhoifsoihfd','slkfjhoifsoihfd','slkfjhoifsoihfd','feminino',0,'10','experiente');



        INSERT INTO quiz (idQuiz, acertos, erros, fkusuario, tempo, porcentagem, dtRealizacao) 
VALUES ('1', '1', '1', '21', '12', '12', CURDATE());

insert into quiz values
(DEFAULT,1,2,3,1,3,1.1);

select * from quiz;

SELECT nome from quiz join usuario on fkusuario = idusuario where idusuario = 21;

select * from usuario;

SELECT 

SELECT COUNT(idRegistro) as 'quizzes' from quiz;

-- quantidade de usuario
SELECT COUNT(idusuario) as usuarios from usuario where cargo = 0;

--publico feminino e masculino 

select COUNT(idusuario) as feminino from usuario where sexo = 'feminino';


select COUNT(idusuario) from usuario where sexo = 'masculino';

-- média de acertos e erros
select avg(acertos) from quiz where idQuiz = 1;
select avg(erros) from quiz WHERE idQuiz = 1;

-- nivel dos usuarios cadastrados
SELECT count(nivel) from usuario where nivel = 'iniciante';
SELECT count(nivel) from usuario where nivel = 'intermediario';
SELECT count(nivel) from usuario where nivel = 'experiente';


SELECT idQuiz, COUNT(*) FROM QUIZ GROUP BY idQuiz ORDER BY COUNT(*) DESC LIMIT 1;

--porcentagem geral de acertos e erros dos quiz
SELECT SUM(acertos) AS total_acertos, SUM(erros) AS total_erros FROM quiz where idquiz = 1;

--select de quiz mais popular
SELECT idQuiz, COUNT(*) AS total FROM QUIZ GROUP BY idQuiz ORDER BY total DESC LIMIT 1;
--select da idade média do usuario;
SELECT ROUND(avg(idade)) as media FROM usuario;


SELECT COUNT(idregistro) from quiz where DISTINCT idusuario;


SELECT COUNT(DISTINCT fkusuario) FROM QUIZ;

SELECT COUNT(DISTINCT fkusuario) FROM QUIZ where;

SELECT * FROM quiz;

select count(idusuario) from usuario;

select * from usuario;

-- quantidade quiz
SELECT count(idregistro) as QntQuiz1 from quiz where idQuiz = 1;

SELECT COUNT(nivel) as iniciante from usuario where nivel = 'Experiente';

select avg(acertos) from quiz join usuario on idusuario = fkusuario  where idQuiz = 1 and sexo = 'feminino';

select avg(acertos) from quiz join usuario on idusuario = fkusuario  where idQuiz = 1 and sexo = 'masculino';

select avg(acertos) from quiz where idQuiz = 1;
select avg(erros) from quiz where idQuiz = 1;

SELECT sum(tempo) from quiz where idQuiz = 1;

select count(idregistro) from quiz join usuario on idusuario = fkusuario  where nivel = 'intermediario' and idquiz = 1;

    select count(idregistro) as intermediario from quiz join usuario on idusuario = fkusuario  where nivel = 'intermediario' and idquiz = 1;


select count(idregistro) as iniciante from quiz join usuario on idusuario = fkusuario  where nivel = 'iniciante' and idquiz = 1;


select count(idregistro) from quiz join usuario on idusuario = fkusuario  where nivel = 'intermediario' and idquiz = 2;

select count(idregistro) from quiz join usuario on idusuario = fkusuario  where nivel = 'intermediario' and idquiz = 3;

select count(idregistro) from quiz join usuario on idusuario = fkusuario  where nivel = 'intermediario' and idquiz = 3;


select DISTINCT(idade) as idade, COUNT(idade) as quantidade  from usuario GROUP BY  idade ORDER BY count(idade)  limit 5 ;

select count(idade) from usuario;

select count(idusuario), count(DISTINCT idquiz) from usuario join quiz on idusuario = fkusuario;
     SELECT COUNT(DISTINCT fkusuario, idQuiz) AS realizacoes FROM quiz;


SELECT avg(acertos) from quiz join usuario on idusuario = fkusuario WHERE nivel = 'experiente' and `idQuiz` = 1;

SELECT avg(acertos) from quiz join usuario on idusuario = fkusuario WHERE nivel = 'experiente' and `idQuiz` = 2;

SELECT avg(acertos) from quiz join usuario on idusuario = fkusuario WHERE nivel = 'experiente' and `idQuiz` = 3;

SELECT avg(acertos) from quiz join usuario on idusuario = fkusuario WHERE nivel = 'iniciante' and `idQuiz` = 1;

SELECT avg(acertos) from quiz join usuario on idusuario = fkusuario WHERE nivel = 'iniciante' and `idQuiz` = 2;

SELECT avg(acertos) from quiz join usuario on idusuario = fkusuario WHERE nivel = 'iniciante' and `idQuiz` = 3;



SELECT * from quiz join usuario on idusuario = fkusuario WHERE nivel = 'experiente' and `idQuiz` = 1;

