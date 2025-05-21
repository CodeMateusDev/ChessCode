
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
(DEFAULT, 'mateus','mateus@gmail.com','sla','masculino',1,'1111-11-11','intermediario');

CREATE TABLE QUIZ(
    idRegistro INT PRIMARY KEY AUTO_INCREMENT,
    idQuiz int,
    acertos int,
    erros int,
    fkusuario int,
    tempo int, 
    porcentagem INT,
    dtRealizacao date
    Foreign Key (fkusuario) REFERENCES usuario(idusuario)
);

  
        INSERT INTO quiz (idQuiz, acertos, erros, fkusuario, tempo, porcentagem, dtRealizacao) 
VALUES ('1', '1', '1', '21', '12', '12', CURDATE());

insert into quiz values
(DEFAULT,1,2,3,1,3,1.1);

select * from quiz;

SELECT nome from quiz join usuario on fkusuario = idusuario where idusuario = 21;

select * from usuario;


-- quantidade de usuario
SELECT COUNT(idusuario) from usuario where cargo = 0;

--publico feminino e masculino 
select COUNT(idusuario) from usuario where sexo = 'feminino';
select COUNT(idusuario) from usuario where sexo = 'masculino';

-- média de acertos e erros
select avg(acertos) from quiz where idQuiz = 1;
select avg(erros) from quiz WHERE idQuiz = 1;

-- nivel dos usuarios cadastrados
SELECT count(nivel) from usuario where nivel = 'iniciante';
SELECT count(nivel) from usuario where nivel = 'intermediario';
SELECT count(nivel) from usuario where nivel = 'experiente';


SELECT idQuiz, COUNT(*) FROM QUIZ GROUP BY idQuiz ORDER BY COUNT(*) DESC LIMIT 1;

porcentagem geral de acertos e erros dos quiz
SELECT SUM(acertos) AS total_acertos, SUM(erros) AS total_erros FROM quiz where idquiz = 1;