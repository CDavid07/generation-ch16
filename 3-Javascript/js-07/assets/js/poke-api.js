const urlPokemon = "https://pokeapi.co/api/v2/pokemon/pikachu"

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };

/* Elementos DOOM*/
const imgPokemon = document.getElementById("img-pokemon");
/* console.log(imgPokemon);
 */

console.log(1+3+"7");
const idPokemon = document.getElementById("id-pokemon");
/* console.log(idPokemon);
 */
const nombrePokemon = document.getElementById("nombre-pokemon");
/* console.log(nombrePokemon);
 */

/* Funciones*/
function buscarPokemon(){
    let buscarPokemon = document.getElementById("buscador").value;
    console.log(buscarPokemon);

    let urlPokemonB = `https://pokeapi.co/api/v2/pokemon/${buscarPokemon}`
    obtnerPokemon(urlPokemonB);
}

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

        const listaHabilidades= document.getElementById('habilidades');
        listaHabilidades.innerHTML="";
         pokemon.habilidad.forEach((element) => {
            listaHabilidades.innerHTML += `<li class="list-group-item" >${element.ability.name}</li>`;
        });

        const listaTipo= document.getElementById('tipo');
        listaTipo.innerHTML = "";
        pokemon.tipo.forEach((element) => {
           
            //console.log(TYPE_COLORS[element.type.name]);
            listaTipo.innerHTML += `<li class="list-group-item text-white" style= "background-color: #${TYPE_COLORS[element.type.name]};" >${element.type.name}</li>`;
        });
  
    } catch (error) {
        console.log(error);
    }
}

obtnerPokemon(urlPokemon);