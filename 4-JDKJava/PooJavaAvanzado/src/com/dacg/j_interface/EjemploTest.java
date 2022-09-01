package com.dacg.j_interface;

public class EjemploTest {
    public static void main(String[] args) {
        System.out.println("Test.CONV = " + Test.CONV);
        System.out.println("Prueba.CONV = " + Prueba.CONV);
        Prueba prueba = new Prueba();
        System.out.println("prueba.CONV = " + prueba.CONV);

        Test tests = new Prueba();
        tests.metodo1(3);
        //ts.metodo2("hola");
        System.out.println("tests.metodo2( \"hola\") = " + tests.metodo2( "hola"));
        prueba.metodoPropio();

        Test1 s1 = new Prueba();
        s1.metodo01();
        System.out.println("s1.metodo02() = " + s1.metodo02());
    }
}
