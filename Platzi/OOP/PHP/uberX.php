<?php
    require_once('car.php');
    class UberX extends Car {
        public $brand;
        public $model;


    public function __construct($license, $driver, $brand, $model) {
        //"parent::__construct" hace referencia los ATRIBUTOS y METODOS de la CLASE PADRE
        parent::__construct($license, $driver);
        //"this" hace referencia los ATRIBUTOS de la CLASE local o HIJA
        $this->brand = $brand;
        $this->model = $model;
     }
}
?>