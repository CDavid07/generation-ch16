function miFuncion(a,b){
    return (a+ b);
}
let res = miFuncion(4,5);
console.log("El resultado es: ",res);

/************************Fucion expresion o anonima *********************/
let suma = function(a,b){return (a+b);}

res = suma(5,2);
console.log("El resultado de la suma es: ",res);

let resta = function(a,b){return (a-b);}

res = resta(5,2);
console.log("El resultado de la resta es: ",res);

let multiplicacion = function(a,b){return (a*b);}

res  = multiplicacion(5,2);
console.log("El resultado de la multiplicacion es: ",res);

let division = function(a,b){
    if(b==0){
        return  "El divisor no debe ser 0" 
    }else{
        return (a/b).toFixed(2);
    }
}

res = division(1,3);
console.log("El resultado de la division es: ",res);

/************************Self Invoking *********************/
(function (a,b){
    console.log("El resultado de Self Invoking es:" + (a+b));
})(5,3)
