const urlAleatorios = "https://api.thecatapi.com/v1/images/search"

const imgGato = document.getElementById("img-gato");
//console.log(imgGato);

const btn = document.getElementById("btn-gato");
console.log(btn);

//Eventos
btn.addEventListener("click",()=>{
    console.log("Boton presionado");

    //Agregar funcionalidad
    obtenerGatoAleatorio(urlAleatorios);
})

async function obtenerGatoAleatorio(url) {
    try {
        const respuesta = await fetch(url);
        const dato = await respuesta.json();
    
        console.log(dato[0].id);
        console.log(dato[0].url);

        imgGato.src = dato[0].url;
        
    } catch (error) {
        console.log(error);
    }
}

obtenerGatoAleatorio(urlAleatorios);