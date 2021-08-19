class Account {
    Integer id;
    String name;
    String document;
    String email;
    String password;

    //Parámetros obligatorios para crear un OBJTO de tipo ACCOUT
    public Account(String name, String document){
        this.name = name;
        this.document = document;

    }
}