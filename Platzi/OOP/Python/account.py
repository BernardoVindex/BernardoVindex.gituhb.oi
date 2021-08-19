class Account:
    id        = int
    name      = str
    doocument = str
    email     = str
    password  = str

    #__init__ Se encargará de personalizar la instanciación de la CLASE (lo que esté dentro de __init__ será lo prmiero que se ejecute cuando se cree una CLASE)
    #self hace referenia a los datos de la CLASE
    def __init__(self, name, document):
        self.name     = name
        self.document = document  