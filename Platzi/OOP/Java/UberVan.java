import java.util.ArrayList;
import java.util.Map;

class UberVan extends Car
{
    Map<String, Map<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterials;
    
    //Constructor
    public UberVan(String license, Account driver,
     Map<String, Map<String, Integer>> typeCarAccepted, 
     ArrayList<String> seatsMaterials){
        //Super hace referencia los ATRIBUTOS y METODOS de la CLASE PADRE
        super (license, driver);
        //this hace referencia los ATRIBUTOS de la CLASE local o HIJA
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterials = seatsMaterials;
    }  

}