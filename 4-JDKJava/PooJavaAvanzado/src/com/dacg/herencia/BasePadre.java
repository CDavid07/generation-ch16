package com.dacg.herencia;

public class BasePadre {
    protected int a;
    private double b;
    private String c;

    public BasePadre(){

    }
    public void visualizarA(){
        System.out.println(getA());
    }

    public void visualizarABC(){
        System.out.println(toString());
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }

    @Override
    public String toString() {
        return  "a=" + a +
                ", b=" + b +
                ", c='" + c + '\'' +
                '}';
    }
}
