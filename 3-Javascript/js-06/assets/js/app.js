/* Document Object Model (DOM) */

//getElementById()

console.log(document.getElementById('parrafo1'));

const parrafo1 = document.getElementById('parrafo1'); // para no volver a escribir console.log(document.getElementById('parrafo1')); 
console.log(parrafo1.textContent);

parrafo1.textContent = "Hola pai, yo reemplaze lo que habia aqui"; // reemplaza el texto por lo escrito en las comillas
console.log(parrafo1.textContent);

console.log(parrafo1.style); // para ver lo que podemos modificar 

parrafo1.style.color = 'red';
parrafo1.style.backgroundColor = 'yellow';


//querrySelector()

//etiqueta = p
//clase = .parrafo
//id = #parrafo


const parrafo2 = (document.querySelector(".parrafo"));
console.log(parrafo2.textContent);

parrafo2.textContent += " Modificado y agregado en javascript"


//querrySelectorAll() ó Lista de nodos - node list

const parrafo = document.querySelectorAll ('p');
console.log(parrafo);

parrafo [2].style.fontSize = "2rem"


//css - font-size
//js 

//modificar los atributos HTML

const enlace = document.getElementById ("enlace");
console.log(enlace.href);

enlace.href ="https://www.youtube.com/" //cambiamos el enlace de google a youtube
enlace.target = "_blank"; // para cambiar a otra pestaña
enlace.textContent ="Enlace a Youtube"

//devuelve la ultima fecha que se modifico 
console.log(document.lastModified);


console.log(parrafo2.style);
parrafo2.style.color= 'blue';
parrafo2.style.backgroundColor= "gray";
parrafo2.style.fontSize= "1rem";


//modificar 3 atributos al HTML desde JS

const h1 = document.querySelector ("h1");
h1.style.color = "brown"

/* Reemplazar contenido */

const parrafo4 = document.getElementById ('parrafo4'); //1er paso Llamar al elemento 

console.log(parrafo4.nodeName); //el node.Name es un TypeOf (muestra el tipo del elemento)
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML); //muestra el html que haya en el interior del elemento
console.log(parrafo4.outerHTML);// muestra el contenido del html, incluyendo al elemento

//parrafo4.innerHTML = '<a href="http://google.com">Enlace</a>' //Sustituye el contenido del elemento

//parrafo4.outerHTML = '<a href="http://google.com">Enlace</a>' //Sustituye el elemento, puede ser a un div,h1,p,col etc...

console.log(parrafo4.classList.contains("elemento"));
parrafo4.classList.add('elemento');