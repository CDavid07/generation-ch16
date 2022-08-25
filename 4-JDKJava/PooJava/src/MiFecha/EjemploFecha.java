package MiFecha;

public class EjemploFecha {
    public static void main(String[] args) {
        Fecha fecha = new Fecha();
        fecha.setDia(25);
        fecha.setMes(8);
        fecha.setAnio(2022);
        System.out.println(fecha.formaF());
    }
}
 