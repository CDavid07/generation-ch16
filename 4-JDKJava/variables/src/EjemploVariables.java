public class EjemploVariables {
    public static void main(String[] args){
        String nombre = "David";
        String saludo ="Hola esto es ejemplo de variables";
       
        System.out.println(saludo +"espacio"+nombre);
        char espacio = '\u0020';
        System.out.println("espacio="+ espacio);

        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("Char corresponde en bits: " +Character.SIZE);
        System.out.println("Char valor maximo: " +Character.MAX_VALUE);
        System.out.println("Char valor minimo: " +Character.MIN_VALUE);

        //Declaración de variables numericas:
        int numeroEntero = 2;

        System.out.println("numeroEntero =" + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " +Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);

        //Declaración de variables float

        float numeroFloat =1;
        System.out.println("numeroFloat =" + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);

         //variables 
        double numeroDouble = 3.443432;
         System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("double valor maximo: " + Double.MAX_VALUE);
        System.out.println("double valor minimo: " + Double.MIN_VALUE);


        //variables boolean
        boolean valorBoolean = (3-2 == 4);
         System.out.println("valorBoolean= " + valorBoolean);
       /*  System.out.println("boolean corresponde en bits: " + Boolean.SIZE);
        System.out.println("boolean valor maximo: " + Boolean.MAX_VALUE);
        System.out.println("boolean valor minimo: " + Boolean.MIN_VALUE); */

       var miVar = '2',
        System.out.println("miVar = " + miVar);

    }
}
