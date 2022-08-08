/* crear un elemento */
const imagen =document.createElement('img');

/* modificar los atributos html del elemento */
imagen.src = 'https://placeimg.com/200/200/animals';
imagen.alt = 'Imagenes aleatorias de animales'


/* lo insertamos en un elemento padre */
document.body.appendChild(imagen)
/* document.body.insertAdjacentElement("afterbegin", imagen)
document.body.insertAdjacentElement("afterend", imagen)
document.body.insertAdjacentElement("beforebegin", imagen)
document.body.insertAdjacentElement("beforeend", imagen) */


/* forma correcta de crear e insertar un elemento */
/* 1.- se crea el elemento que contendra la imagen */
/* 2.- seleccionar el elemnento padre */
const padreImg = document.getElementById('padreImg');

/* 3.- crear el elemento */
const imagen2 = document.createElement('img')

/* 4.- modificamo los atribustos del elemento */
imagen2.src = "https://placeimg.com/290/260/nature";
imagen2.alt = "Imagenes de naturaleza";

/* 5.- insertar elemento */
padreImg.appendChild(imagen2);


/* utilizar forEach para pintar datos */
const frutas = ["Toronja", "Manzana", "Mandarina", "Limon", "Granada", "Melon", "Platano", "Guayaba"];

const listaFrutas = document.getElementById('frutas');

/* frutas.forEach((element) => {
    const li = document.createElement('li')
    li.textContent = element
    listaFrutas.appendChild(li);
}); 
 */

/* forma 2 */
frutas.forEach((element) => {
    listaFrutas.innerHTML += `<li>${element}</li>`;
});