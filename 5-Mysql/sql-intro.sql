CREATE DATABASE tienda; 
USE tienda;

CREATE TABLE clientes (
client_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL, 
telefono CHAR(50) NOT NULL, 
direccion VARCHAR(150) NOT NULL);

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES('Pedro', 'Paramo', '5576231829', 'Comala'),
('Raul', 'Sanchez', '5576231239', 'Comala'),
('Victor', 'Fernandez', '5576231845', 'Comala');

SELECT * FROM clientes;

DELETE FROM clientes WHERE client_id =1;