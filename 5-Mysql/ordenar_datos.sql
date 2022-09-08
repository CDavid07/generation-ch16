USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias
SELECT 5 + 5;

SELECT Name AS Nombre_de_pais, Population AS 'Poblacion del pais' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- Basicamente DISTINCT filtra los datos repetidos

-- Where clausula,
-- < > <= >= != = 
SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;

-- Between

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

-- OR / AND / != 
SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';
SELECT * FROM country WHERE Continent != 'Asia' AND Continent != 'Europe' AND Continent != 'North America';

-- operador IN 
SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent;
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europe', 'North America') ORDER BY Continent;

-- FILTRAR VALORES NULOS Y NO NULOS
SELECT * FROM country WHERE IndepYear IS NOT NULL;
SELECT * FROM country WHERE IndepYear IS NULL;

-- %: BUSCAR CUALQUIER CANTIDAD DE CARACTERES
-- '_': ESPECIFICAR UN CARACTER
-- PALABRAS QUE TERMINEN EN '_':
SELECT Name FROM country WHERE Name LIKE '%as';
-- PALABRAS QUE INICIEN CON '_':
SELECT Name FROM country WHERE Name LIKE 'A%';
-- PALABRAS QUE INICIEN CON '_' Y TERMINEN EN '_':
SELECT Name FROM country WHERE Name LIKE 'A%a';
-- PALABRAS QUE CONTENGAN '_' EN CUALQUIER POSICION:
SELECT Name FROM country WHERE Name LIKE '%as%';
-- PALABRAS QUE CONTENGAN e SEPARADO POR DOS LETRAS Y LUEGO a:
SELECT Name FROM country WHERE Name LIKE '%e__a';