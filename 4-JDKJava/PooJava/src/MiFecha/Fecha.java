package MiFecha;

public class Fecha {
    private int dia;
    private int mes;
    private int anio;

    public int getDia() {
        return dia;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }
 
    public void setMes(int mes) {
        this.mes = mes;
    }

    public int getMes() {
        return mes;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    public int getAnio() {
        return anio;
    }

    public String formaF(){
        return ""+getDia()+"/"+getMes()+"/"+getAnio();
    }
}
