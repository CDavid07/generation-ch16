//variable que simula los pedidos
const saludo ="Hola mundo";
const datos=[
    {
        nombre:"David",
        apellido: "Castellanos"
    },
    {
        nombre:"David",
        apellido: "Castellanos"
    },
    {
        nombre:"David",
        apellido: "Castellanos"
    }
]

//Funcion para simular una peticion
function obtenerDatos() {

    return new Promise((resolve, reject) => {
        
        setTimeout(() =>{
            if (false) {
                resolve (datos);
            } else {
                reject("Nunca te quiso")
            }
        },2000 )
    })
    
}

//Forma #1
obtenerDatos().then( (datos) =>{ 
    console.log(datos);

} ).catch ((error) =>{

    console.log(error);
})

//Forma #2 Funciones asincronas
async function funcionAsincrona() {

    try {
        const datos = await obtenerDatos();
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
    
}

funcionAsincrona();