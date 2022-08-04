
var dineroBanco = 10000;

function versueldo(){
    alert("El sueldo del cajero es de:"+ dineroBanco);
}
alert("Bienvenido al banco Generation");

while(dineroBanco>=0){

    let opcion = parseInt(prompt("Ingrese 1 para ver estado de cuenta\n Ingrese 2 para retirar"));
    if(opcion == 1){
        versueldo()
    }else{
        let retiro = parseInt(prompt("Cuanto desea retirar?"));
        
        dineroBanco = dineroBanco - retiro;
    }
}
alert("Cajero no disponible")

//falta