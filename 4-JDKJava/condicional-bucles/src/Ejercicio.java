import java.util.Objects;
import java.util.Scanner;

public class Ejercicio {

    public static void main(String[] args) {

        //Ejercicio 1
        String dibujo = "*";
        int nivel = 5;
        for (int i = 0; i <nivel ; i++) {

            System.out.println(dibujo);
            dibujo = dibujo+"*";

        }
        String dibujo2="";
        //Ejercicio 2
        while(nivel != 0){
            for (int i = 0; i < nivel ; i++) {
                dibujo2 = dibujo2 + "*";
            }
            System.out.println(dibujo2);
            dibujo2 = "";
            nivel--;

        }

        int salida =0;
        String dibujo3 = "";
        Scanner sc  = new Scanner(System.in);

        //Ejercicio 3
        while(salida != 1){
            System.out.println("Cuantas estrellas quiere que aparezcan?");
            int cantidad = sc.nextInt();

            System.out.println("Que orden quieres que sea opciones: Ascendente Descendente?");
            String direccion = sc.next();

            if(Objects.equals(direccion, "Ascendente")){
                dibujo3 = "*";
                for (int i = 0; i <cantidad ; i++) {
                    System.out.println(dibujo3);
                    dibujo3 = dibujo3+"*";
                }
            }else {
                int nivel2 = cantidad;
                dibujo3 ="";
                while (nivel2 != 0) {
                    for (int i = 0; i < nivel2; i++) {
                        dibujo3 = dibujo3 + "*";
                    }
                    System.out.println(dibujo3);
                    dibujo3 = "";
                    nivel2--;

                }
            }
            System.out.println("Quieres probar otra manera? 0:Si 1:No");
            salida = sc.nextInt();
        }

        //Ejercicio salucion
        /*
            Scanner sc = new Scanner(System.in);
        System.out.println("Indique la cantidad de estrellas");
        int numEstrellas = sc.nextInt();
        System.out.println("Indique la direccion (Ascendente,Descendente)");
        String direccion = sc.next();

        switch (direccion){
            case "Ascendente":
                for(int i=1; i<=numEstrellas ; i++){
                    for (int j=0; j<i; j++){
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            case "Descendente":
                for(int i=numEstrellas; i>=1 ; i--){
                    for (int j=0; j<i; j++){
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            default:
                System.out.println("Opcion no valida");
        }


        */

    }
}
