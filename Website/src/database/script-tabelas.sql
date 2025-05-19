-- Active: 1747516402911@@127.0.0.1@3306@chesscode
CREATE DATABASE chesscode;

USE chesscode;

create table usuario(
    idusuario int primary key AUTO_INCREMENT,
    nome VARCHAR(60) UNIQUE,
    email VARCHAR(100),
    senha VARCHAR(45),
    sexo VARCHAR(9),
    cargo VARCHAR(13),
    dtnascimento DATE,
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
    porcentagem DECIMAL(4,2),
    Foreign Key (fkusuario) REFERENCES usuario(idusuario)
);


insert into quiz values
(DEFAULT,1,2,3,1,3,1.1);

select * from quiz;