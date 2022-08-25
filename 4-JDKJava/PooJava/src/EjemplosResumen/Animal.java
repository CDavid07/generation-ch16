package EjemplosResumen;

public class Animal {

    private String raza;
    private String nombre;
    private int edad;


    public Animal(String nuevoNombre){

        nombre = nuevoNombre;//se le da un nombre al animal
    }

    //metodo para obtener la edad del animal
    public int getEdad(){

        return edad;
    } 

    //metodo para establecer la edad del animal
    public void setEdad(int nuevaEdad){

        edad= nuevaEdad;
    }

    //metodo para obtener ek nombre del animal
    public String getNombre(){

        return nombre;
    }

}
