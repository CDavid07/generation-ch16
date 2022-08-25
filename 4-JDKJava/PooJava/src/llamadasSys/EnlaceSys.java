package llamadasSys;

import EjemplosResumen.Animal;
import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EnlaceSys {

    public void enlazar(){

        Scanner sc = new Scanner (System.in);
        MenuOp menuOP = new MenuOp();
        int opcion;

        do {
            menuOP.menu();
            System.out.print("Elija una opcion ->");
            opcion = sc.nextInt();
            switch(opcion){
                case 1:
                    Saludo s = new Saludo();
                    s.saludar();
                    System.out.println(s.saludar0());
                    break;
                case 2:
                    Persona p = new Persona();
                    System.out.print("Nombre ->");
                    p.setNombre(sc.next());
                    System.out.print("Edad ->");
                    p.setEdad(sc.nextInt());
                    System.out.print("NSS ->");
                    p.setNss(sc.nextInt());
                    System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNombre());
                    System.out.println("el valor de la variable de instancia p.edad -> " + p.getEdad());
                    System.out.println("el valor de la variable de instancia p.nss -> " + p.getNss());
                    break;
                case 3:
                    Fecha fecha = new Fecha();
                    System.out.print("Dia ->");
                    fecha.setDia(sc.nextInt());
                    System.out.print("Mes ->");
                    fecha.setMes(sc.nextInt());
                    System.out.print("Año ->");
                    fecha.setAnio(sc.nextInt());
                    System.out.println(fecha.formaF());
                    break;
                case 4:
                    //creacion de de instancia
                    Animal miAnimal = new Animal("Falco");

                    //mandamos edad al creador
                    miAnimal.setEdad(3);

                    //mostramos el nombre
                    System.out.println("El nombre es: "+miAnimal.getNombre());

                    //mostramos la edad
                    System.out.println("y tiene "+miAnimal.getEdad()+" años");;
                    break;
                default:
                    System.out.println("Opción no válida");
            }

        }while (opcion != 0);
    } 
}
