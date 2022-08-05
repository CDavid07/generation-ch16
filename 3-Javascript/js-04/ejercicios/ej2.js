/* let imprimir ="*";
for(let i=0; i<5; i++){
    console.log(imprimir);
    imprimir = imprimir+" *"
}*/

/* 
// definimos la anchura máxima
let max=11;
// variables de interación
let j=1,k=1;
// contiene el resultado a mostrar
let result="";

for(let h=1;h<2;h++)
{
    for(let i=k;i<=max;i+=2){
        result+="\n"+(Array((1+(Math.ceil(max/2))-j)).join(" ")+Array(i+1).join("*"));
        j=j+1;
    }
    k=5;
    j=3;
}
//tronco
if(max>=7)
{
    result+="\n"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(4).join("*"));
    result+="\n"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(4).join("*"));
} 
console.log(result);
*/

//forma doble
for(let i=1; i<=5; i++){
    patron = '';
    for(let j=0; j<i;j++){
        patron = patron + " *";
    }
    console.log(patron);
} 
