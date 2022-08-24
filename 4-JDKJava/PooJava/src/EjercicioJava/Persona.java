package EjercicioJava;

public class Persona {

    private String nombre;
    private int edad;
    private int nss;

    public Persona(String nombre, int edad, int nss) {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }

    public void caminar(){
        System.out.println("run");
        System.out.println(this.nombre);
    }

    public void dormir(){
        System.out.println("dormir");
    }
}