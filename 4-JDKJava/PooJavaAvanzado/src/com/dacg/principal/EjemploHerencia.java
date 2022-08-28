package com.dacg.principal;

import com.dacg.componente.Menu;
import com.dacg.herencia.BasePadre;
import com.dacg.herencia.Hija;
import com.dacg.herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {
        /*Menu menu = new Menu();
        menu.enlazar();*/

        Hija hija = new Hija();
        hija.visualizarA();

        Hijo hijo = new Hijo();
        hijo.visualizarABC();

        BasePadre padre = new BasePadre();
        padre.setA(2357);

        System.out.println("Atributo de clase base padre: "+ hija.getA());

    }
}
