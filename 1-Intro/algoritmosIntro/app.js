//variables

let miVariable = "David";
console.log(miVariable);

miVariable = "Erendira";

console.log(miVariable);


const apellido = "Lopez";
console.log(apellido);

// Datos primitivos y datos compuestos - Datos primitivos que usa JavaScript

// String -- Cadena de texto
// "texto"     'texto'   `texto`

let variableCadena = "texto mas texto 35";
console.log(variableCadena);

//Number - numero, nos permite agregar números 
// 12345

let variableNumber = 3456;
variableNumber = variableNumber + 5
console.log(variableNumber);

//concatenación
//unir dos cadenas de texto
//unir un texto y un numero 
//solo ocurre con el signo de +
let a = 1;
let b = 1; 
console.log(a+b);

//Boolean -- booleano
//Dato lógico
// Puede ser true or false

let verdadero = true;

let falso = false;

console.log(verdadero, falso);

//null - nulo, valor asignado que tiene el valor de no valor, no vale nada

let varNull = null;
console.log(varNull);

//undefined -- indefinido - ausencia completa de valor
//variable declarada pero sin asignación de valor, esa variable es undefined

let variable;
console.log(variable + 1);

//typeof

let num1= 456;
console.log(typeof num1);

let varBool = true;
console.log(typeof varBool);

console.log(typeof "Hola");
console.log(typeof (123));

console.log(typeof null);

console.log(typeof {});

/* ACTIVIDAD:
Cuentame de ti.
Para esta actividad de manera individual, habrá que trabajar con Visual Studio Code.
Necesitas crear las siguientes variables;
-Nombre
-Número favorito 
Responder; Tienes mascotas (Si/No)
Imprimir en una pantalla */
let nombre = "David";
let numeroFavorito = 7;
let mascota = true;


console.log("Nombre",nombre);
console.log("Número",numeroFavorito);
console.log("Tengo mascota", mascota);