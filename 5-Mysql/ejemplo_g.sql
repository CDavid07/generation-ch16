CREATE DATABASE relaciones;

USE relaciones;

CREATE TABLE alumno(
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones int NOT NULL
);

CREATE TABLE instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
RFC VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL,
sesiones VARCHAR(255)NOT NULL
);

CREATE TABLE cohorte(
cohorte16_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR(255) NOT NULL,
FOREIGN KEY (alumno_id) REFERENCES alumno(alumno_id),
FOREIGN KEY (instructor_id) REFERENCES instructor(instructor_id)
);

CREATE TABLE equipo(
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL,
FOREIGN KEY (alumno_id) REFERENCES alumno(alumno_id)
);

CREATE TABLE direccion(
direccion_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL, 
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL, 
FOREIGN KEY (alumno_id) REFERENCES alumno(alumno_id)
);

INSERT INTO alumno(nombre, edad, CURP, RFC, nivel_ingles, amonestaciones)
VALUES ('Fernando', 25, 'OAJSDFHISd938474948', 'OAJSHF9848484', 'B2', 3);

INSERT INTO instructor(nombre, edad, cumpleanios, RFC, supervisor, sesiones)
VALUES ('Raúl', 34, '1985-09-15', 'OAJS49854985', '393s', '5');

SELECT * FROM alumno;
SELECT * FROM instructor;