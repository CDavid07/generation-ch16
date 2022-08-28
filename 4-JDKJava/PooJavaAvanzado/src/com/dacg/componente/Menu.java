package com.dacg.componente;

import com.dacg.herencia.BasePadre;

import java.util.Scanner;

public class Menu {

    public void enlazar(){
        Scanner sc = new Scanner (System.in);
        BasePadre basePadre = new BasePadre();

        System.out.print("A (int)->");
        basePadre.setA(sc.nextInt());

        System.out.print("B (double) ->");
        basePadre.setB(sc.nextDouble());

        System.out.print("C (String) ->");
        basePadre.setC(sc.next());

        basePadre.visualizarA();
        basePadre.visualizarABC();
    }




}
