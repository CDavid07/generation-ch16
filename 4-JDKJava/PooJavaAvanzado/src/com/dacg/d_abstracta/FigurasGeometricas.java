package com.dacg.d_abstracta;

public abstract class FigurasGeometricas {
    private String nombre;

    public FigurasGeometricas(String nombre) {
        this.nombre = nombre +" area ->";
    }

    public abstract float area();

    public String toString() {
        return nombre + "El area es: "+area();
    }}
