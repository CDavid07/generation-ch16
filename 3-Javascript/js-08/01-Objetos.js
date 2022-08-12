let x = 10;
console.log(x.lenght);

let persona = {
    nombre : 'David',
    apellido: 'Castellanos',
    edad: 23,
    correo: 'david@gmail.com',
   /*  nombreCompleto: function () {
        return this.nombre+ ' ' +this.apellido;        
    } */

    idioma: 'es',
    get leng (){
        return this.idioma.toUpperCase();
    },
    set lang (lang){
        this.idioma = lang.toLowerCase();
    }
}

//console.log(persona.leng);
persona.lang = 'es'
console.log(persona.leng);
console.log(persona.idioma);

/* 
persona.tel = '5557525741'
persona.tel = '8885577125'

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.correo);
console.log(persona.nombreCompleto());

let persona_obj = new Object();
persona_obj.nombre = "Arturo";
persona_obj.edad= 23;
persona_obj.correo = "Correo@gmail.com"
console.log(persona_obj.nombre);
console.log(persona_obj.edad);
console.log(persona_obj.correo);

//for in
for (varPropiedad in persona) {
   console.log(persona[varPropiedad]);
} */