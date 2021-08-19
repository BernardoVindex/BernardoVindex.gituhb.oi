class Car {
    //Varoabes globales respecto a la clase
    //Este modificar hace que solo la CLASE PADRE pueda acceder a este dato (ENCAPSULMIENTO)
    private Integer id;
    private String license;
    private Account driver;
    //pot
    protected Integer passenger;
    
//Metodo constructor
    //Declaramos parametros obligatoros para que se cree un objet tipo Car
    public Car(String license, Account driver) //Variables locales de la clase
    {
            this.license = license; //this hace referencia al los ATRIBUTOS de la clase y a los METODOS
            this.driver = driver;

    }
    
    void printDataCar() {
        System.out.println("License: " + license + "Driver name: " + driver.name + " Passengers: " + passenger);
    }

    //Se crea una funcion PUBLICA que PIDE el valor de la variable passenger
    public Integer getPassenger(){
        return passenger;
    }
    //Se crea una función PÚBLICA que manda una copia del VALOR de la varalbe passenger
    public void setPassenger(Integer passenger){
    //Una condicional que bloqua cualquier entento de modificación en setPassener
        if(passenger == 4){
        this.passenger = passenger;
        }
        else{
            System.out.println("Necestas asignar 4 pasajeros");
        }
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Account getDriver() {
        return driver;
    }

    public void setDriver(Account driver) {
        this.driver = driver;
    }



}