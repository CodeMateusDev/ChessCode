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