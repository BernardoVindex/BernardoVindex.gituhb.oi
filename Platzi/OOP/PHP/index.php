<?php

require_once('car.php');
require_once('uberX.php');
require_once('account.php');

$uberX = new UberX("CBD634", new Account("Andres Herrera", "AFN123"), "Chevrolet", "Spark");
//Herencia
$uberX->printDataCar();
//$car = new Car("AW456", new Account("Andres Herrera", "AMS123"));
//$car->printDataCar();
?>