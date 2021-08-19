class UberX extends Car
{
    String brand;
    String model;

    //Constructor
    public UberX(String license, Account driver, String brand, String model){
        //Super hace referencia los ATRIBUTOS y METODOS de la CLASE PADRE
        super (license, driver);
        //this hace referencia los ATRIBUTOS de la CLASE local o HIJA
        this.brand = brand;
        this.model = model;

    }
}
    

