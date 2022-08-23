import java.util.*;

public class Diccionario {
    public static void main(String[] args) {

        Map<String, String> diccionario = new HashMap<String, String>();
        List<String> list=new ArrayList<String>();
        Map<String, String> palabras = new HashMap<String, String>();
        int x;
        
        diccionario.put("ventana","window");
        diccionario.put("puerta","door");
        diccionario.put("lapiz","pencil");
        diccionario.put("pluma","pen");
        diccionario.put("esperanza","hope");
        diccionario.put("sueño","dream");
        diccionario.put("deseos","wishes" );
        diccionario.put("mesa","table");
        diccionario.put("pantalla","screen");
        diccionario.put("pastel","cake");
        diccionario.put("libro","book");
        diccionario.put("bota","boot");
        diccionario.put("pared","wall");
        diccionario.put("ladrillo","brick");
        diccionario.put("mochila", "bagpack");
        diccionario.put("reloj","watch");
        diccionario.put("lampara","lamp");
        diccionario.put("feliz", "happy");
        diccionario.put("conejo", "rabbit");
        diccionario.put("perro","dog");

        for (String i : diccionario.keySet()) {
            list.add(i);
        }
        for (int i = 0; i < 5 ; i++) {
            x=(int) (Math.random() * ((19 -0) + 0)) + 1;
            palabras.put(list.get(x),diccionario.get(list.get(x)));
        }
        System.out.println(palabras);

        Scanner sc = new Scanner(System.in);
       int correctas = 0;
       int incorrectas =0;

        for (String i : palabras.keySet()) {
            System.out.println("Traduce la palabra: " + i);
            String palabra = sc.nextLine();
            if (Objects.equals(palabra,palabras.get(i)) ){
                correctas++;
            }else{
                incorrectas++;
            }
        }

        System.out.println("Respuestas correctas:"+correctas + "\nIncorrectas:"+incorrectas);
    }
}