import java.util.Objects;
import java.util.Scanner;

public class Bucles {
    public static void main(String[] args) {

        //bucle controlado
        for (int i = 0; i <= 10; i++) {
            System.out.println(i);
        }

        //while
        //bucle no controlado

        String condicion="";
        Scanner sc  = new Scanner(System.in);

        // == != estamos comparando datos primitivos
        // La condicion se de be de modificar
        while(!Objects.equals(condicion, "Hola")){
            System.out.println("Saludame");
            condicion = sc.next();
        }

        // el do while es igual al while
        // El do while
        do{
            System.out.println("Saludame x2");
            condicion = sc.next();
        }while(!Objects.equals(condicion, "Hola"));
    }
}
