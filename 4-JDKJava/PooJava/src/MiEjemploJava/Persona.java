package MiEjemploJava;

public class Persona {

    private String nombre;
    private int edad;
    private int nss;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNss(int nss) {
        this.nss = nss;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public int getNss() {
        return nss;
    }

    public Persona(){

    }
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