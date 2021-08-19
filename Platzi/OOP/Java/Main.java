class Main 
{
    public static void main(String[] args) {
       
        UberX uberX = new UberX("AMQ123", new Account("Andrez Herrera","ANS123"), "Chevrolet", "Sonic");
        uberX.setPassenger(4);
        uberX.printDataCar();

        UberVan uberVan = new UberVan("THY862", new Account("Andrez Herrera","ANS123"), null, null);
        uberVan.setPassenger(6);
        uberVan.printDataCar();
        /*Car car2 = new Car("FZQ123", new Account("Andrea Huerta","ADNS563"));
        car2.passenger = 3;
        car.printDataCar();*/
    }
}