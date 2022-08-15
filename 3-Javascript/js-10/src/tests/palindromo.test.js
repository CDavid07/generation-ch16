const palindromo = require('../js/palindromo')

describe('Pruebas de la funcion palindromo', ()=>{

    test('Debe regresar "Es un palindormo si igresamos ojo  "',()=>{
        let mensaje = 'Es palindromo';
        let palabra = 'ojo';
        
        expect(palindromo(palabra)).toBe(mensaje);
    })

    test('Debe regresar "No es palindormo si igresamos name  "',()=>{
        let mensaje = 'Es palindromo';
        let palabra = 'name';
        
        expect(palindromo(palabra)).not.toBe(mensaje);
    })

    test('Al ingresar un numero debe regresar el mensaje',()=>{
        let mensaje = 'No es una palabra';
        let valor = 1;
        
        expect(palindromo(valor)).toBe(mensaje);
    })
});
