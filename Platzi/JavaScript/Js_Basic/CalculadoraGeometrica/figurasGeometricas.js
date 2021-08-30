// -------------------- -------------------- --------------------
/*                         Entrada Datos                       */
// -------------------- -------------------- --------------------

var lado = [
    {numLado: 1, medida: 2},
    {numLado: 2, medida: 4},
    {numLado: 3, medida: 5},
    {numLado: 4, medida: 6}
];

// -------------------- -------------------- --------------------
/*                      Formulas Geométricas                   */
/*                            PERIMETRO                        */
// -------------------- -------------------- --------------------

function calculoPerimetro (lado) {

var sumaDeLados = lado.reduce (
        function (ladoInicial = 0, sigLado) {
            return ladoInicial + sigLado;
        }
    )
    return sumaDeLados;
}

//Perimetro Circulo
function perimetroCirculo(radio) {
    const pi = Math.PI;
    return (radio * 2 ) * pi
}

// -------------------- -------------------- --------------------
/*                      Formulas Geométricas                   */
/*                              ÁREAS                          */
// -------------------- -------------------- --------------------

//Triangulo; a = ( base * altura ) / 2
    function alrturaTriangulo(lado) {
        var nuevoLado = lado[0].medida/2
        // c2 = a2 +b2 ; b2 = c2 - a-
        return lado[1].medida^2 - nuevoLado^2;
    }

    function areaTriangulo(lado) {
        return (lado.medida[0] * alrturaTriangulo(lado)) / 2;
    }

//Cuadrado
    function areaCuadrado(lado) {
        return lado.medida[0]^2;
    }

//Rectangulo
    function areaRectangulo(lado) {
        return lado[0].medida*lado[1].medida;
    }

//Circulo
    function areaCirculo(radio) {
        const pi = Math.PI;
        return pi * (radio^2);
    }
/*

//-- Código del cuadrado ---------------------------------------------------------------------

console.group("Cuadrado")

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

function perimetroTriangulo() {
    return ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
}

function areaTriangulo() {
    return (alturaTrianguo * ladoTriangulo1)/ 2;
}

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

function perimetroCirculo() {
    return diametroCirculo * pi;
} 

function areaCirculo() {
    return (radioCirculo^2) * pi;
}



console.log("El perimetro del círculo mide: " + perimetroCirculo + "cm");
console.log("El área del círculo mide: " + areaCirculo + "cm^2");


console.groupEnd();
*/
