
CREATE DATABASE chesscode;

USE chesscode;

create table usuario(
    idusuario int primary key AUTO_INCREMENT,
    nome VARCHAR(60) UNIQUE,
    email VARCHAR(100),
    senha VARCHAR(45),
    sexo VARCHAR(9),
    cargo VARCHAR(13),
    idade int,
    nivel varchar(45)
);



select * from usuario;

insert into usuario values
(DEFAULT, 'slkfjhoifsoihfd','slkfjhoifsoihfd','slkfjhoifsoihfd','feminino',0,'10','experiente');




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
