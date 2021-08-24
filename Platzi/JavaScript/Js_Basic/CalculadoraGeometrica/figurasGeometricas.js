// Taller 1: Figuras Geométricas

/*
I  - Definir Figuras geométricas
II - Implementar fórmulas en JavaScript
III- Crear funciones
IV - Integrar Js a HTML
*/


//-- Código del cuadrado ---------------------------------------------------------------------

console.group("Cuadrado")

/*Formulas*/
function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");    
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");    
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

/*Consola*/
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");
console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");
console.groupEnd();


//-- Código del triangulo  -----------------------------------------------------------------------

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 6;
const alturaTrianguo = 9;

/*Formulas*/
function perimetroTriangulo() {
    return ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
}

function areaTriangulo() {
    return (alturaTrianguo * ladoTriangulo1)/ 2;
}

/*Consola*/
console.log("Los lados del triangulo miden: " 
            + ladoTriangulo1 + "cm, " 
            + ladoTriangulo2 + "cm, " 
            + ladoTriangulo3 + "cm ");
console.log("El perimetro del triángulo mide: " + perimetroTriangulo + "cm");
console.log("El área del triángulo mide: " + areaTriangulo + "cm^2");


console.groupEnd();


//-- Código del circulo -----------------------------------------------------------------------

console.group("Circulos")

const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const pi = Math.PI;

/*Formulas*/
function perimetroCirculo() {
    return diametroCirculo * pi;
} 

function areaCirculo() {
    return (radioCirculo^2) * pi;
}



/*Consola*/
console.log("El perimetro del círculo mide: " + perimetroCirculo + "cm");
console.log("El área del círculo mide: " + areaCirculo + "cm^2");


console.groupEnd();
