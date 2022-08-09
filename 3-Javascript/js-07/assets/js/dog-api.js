`use strict`

const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

const imgPerrito = document.getElementById("img-perrito");
//console.log(imgPerrito);

const btn = document.getElementById("btn-perrito");
console.log(btn);

//Eventos
btn.addEventListener("click",()=>{
    console.log("Boton presionado");

    //Agregar funcionalidad
    obtenerPerritoAleatorio(urlAleatorios);
})
async function obtenerPerritoAleatorio(url) {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
    
        console.log(datos.message);
        console.log(datos.status);

        imgPerrito.src = datos.message;
        
    } catch (error) {
        console.log(error);
    }
}

//obtenerPerritoAleatorio(urlAleatorios);