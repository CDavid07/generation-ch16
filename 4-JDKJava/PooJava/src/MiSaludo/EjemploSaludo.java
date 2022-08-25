package MiEjemploJava;

public class EjemploSaludo {
    public static void main(String[] args) {

        Saludo objSaludo;// Declarar el objeto
        objSaludo = new Saludo();//Crear objeto con new
        objSaludo.saludar();//LLamando al método

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("Este es otro objeto: -> " + objSaludo0.saludar0());

        objSaludo.textoS = "Hola";
        System.out.println("objSaludo.textoS: " + objSaludo.textoS);

        objSaludo.a = 4;
        System.out.println("objSaludo.a: " + objSaludo.a);
    }
}