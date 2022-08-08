function saludar() {
    alert("Hola")
}

//addeventlistener()

const boton= document.getElementById('boton');

boton.addEventListener('click',(evento)=> {

   console.log(evento.target);
});

const formulario=  document.getElementById('form');

formulario.addEventListener('submit', (e)=> {
    e.preventDefault();
    alert(formulario[0].value);

})