const urlPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu"

/* Elementos DOOM*/
const imgPokemon = document.getElementById("img-pokemon");
console.log(imgPokemon);

const idPokemon = document.getElementById("id-pokemon");
console.log(idPokemon);

const nombrePokemon = document.getElementById("nombre-pokemon");
console.log(nombrePokemon);



function buscarPokemon(){
    let buscarPokemon = document.getElementById("buscador").value;
    console.log(buscarPokemon);

    let urlPokemonB = `https://pokeapi.co/api/v2/pokemon/${buscarPokemon}`
    obtnerPokemon(urlPokemonB);
}
/* Funciones*/
async function obtnerPokemon(url){
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
    
        /*  console.log(datos);

        console.log(datos.forms[0].name);
        console.log(datos.abilities);
        console.log(datos.id);
        console.log(datos.types);
        console.log(datos.sprites.other["official-artwork"].front_default); */
 
        const pokemon ={
            nombre:datos.forms[0].name,
            habilidad: datos.abilities,
            id: datos.id,
            tipo: datos.types, 
            imagen: datos.sprites.other["official-artwork"].front_default
        }
        imgPokemon.src = pokemon.imagen
        idPokemon.textContent =  `ID: ${pokemon.id}`
        nombrePokemon.textContent = pokemon.nombre

    } catch (error) {
        console.log(error);
    }
}

obtnerPokemon(urlPokemon);