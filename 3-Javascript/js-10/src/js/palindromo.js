/* const palindromo = (palabra)=>{

    let palabraInvertida = palabra.split("").reverse().join("");
    if(palabra === palabraInvertida){
        return "Es palindromo"
    }else{
        return "No es palindromo"
    }

    //.replace(/\s+/g, '')

} */

//operador ternario
const palindromo = (palabra) =>{

    if (typeof palabra === 'number') return 'No es una palabra';
    
    let palabraInvertida = palabra.split("").reverse().join("");
    return palabra === palabraInvertida ? 'Es palindromo' : 'No es palindromo'
}
/* console.log(palindromo('Name')); */

module.exports = palindromo;