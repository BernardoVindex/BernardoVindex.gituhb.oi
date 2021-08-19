<?php
    require_once('car.php');
    class UberVan extends Car {
        public $typeCarAccepted;
        public $seatsMaterial;


    public function __construct($license, $driver, $typeCarAccepted, $setsMaterial) {
        //"parent::__construct" hace referencia los ATRIBUTOS y METODOS de la CLASE PADRE
        parent::__construct($license, $driver);
        //"this" hace referencia los ATRIBUTOS de la CLASE local o HIJA
        $this->typeCarAccepted = $typeCarAccepted;
        $this->seatsMaterial = $seatsMaterial;
     }
}
?>