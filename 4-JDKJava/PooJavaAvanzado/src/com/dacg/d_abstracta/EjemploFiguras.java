package com.dacg.d_abstracta;

public class EjemploFiguras {
    public static void main(String[] args) {
        /*Triangulo triangulo = new Triangulo(0,0);
        triangulo.setBase(5);
        triangulo.setAltura(2);
        System.out.println("t es el objeto de triangulo = " + triangulo.area());

        Circulo circulo = new Circulo();

        circulo.setRadio(15.5f);
        System.out.println("Calculo el area del circulo" + circulo.area());
    */
        Triangulo triangulo = new Triangulo(4,8);

        System.out.println(triangulo);

        Circulo circulo= new Circulo(5);

        System.out.println(circulo);
    }
}
