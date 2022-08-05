// sort()
// ordenar los elementos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort();

console.log(arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];

arr2.sort();

console.log(arr2);


const arr3 = [5, 1234, 67, 1, 80];
console.log(arr3);  // sin ordenar

arr3.sort((a, b) => a - b)
console.log(arr3); // ordenado

// funcion declarada
// holsting (Se pueden llamar desde cualquier parte del codgio)
// un proceso de reacomodo automatico del codigo

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 7));

let a = 2;

console.log(a);

// funciones expresada
// no tiene holsting
const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(3, 5));



// funciones flecha 

const dividir = (a, b) =>{
    return a / b;
}


console.log(dividir(10, 2));




// forEach()
// un ciclo que recorre en automatico todo nuestro arreglo

const arrNumeros = [1,4,6,8,10,20,30];

// for( let i=0; i < arrNumeros.length; i++){
//     arrNumeros[i] = arrNumeros[i] * 2

// }



// forEach(elemento, indice, arreglo completo)
arrNumeros.forEach((elemento) => console.log(elemento *= 2) //elemento *= 2
);