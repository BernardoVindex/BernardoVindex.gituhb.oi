const lista = [
    100,
    900,
    700,
    200,
    300,
    500,
    200,
    300,
    500,
    900,
    700,
    100,
    300,
    500,  
    200,
    300,
    500,
    200
];

// -------------------- -------------------- --------------------
/*                       Calcular PROMEDIO                     */
/*                       Con array.reduce()                    */
// -------------------- -------------------- --------------------
function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

        // -------------------- Con ciclo FOR --------------------
        /*
            let sumaLista = 0;
            
            for (let i = 0; i < lista.length; i++) {
                sumaLista1 = sumaLista1 + lista1[1];
            }

            const promedioLista1 = suma Lista1 / lista1.length;
        */

// -------------------- -------------------- --------------------
/*                       Calcular MEDIANA                      */
// -------------------- -------------------- --------------------
    /*   Procedimiento:                                     *
    *    1. Colocar valores del array de menor a mayor      *
    *    2. Encontrar elvalor de enmedio del array          *
    *        a. Si el array es impar:                       *
    *            Tomar el numero de enmedio                 *
    *        b. Si el array es par:                         *
    *            Primediar los dos valore de en medio       *
    *    3. Imprimir el valor encontrado                    */

//Paso 1. Colocar valores del array de menor a mayor            
var listaOrdenada = lista.sort(
    function (a,b) {
        return a - b;
    }
)        
//Paso 2. Encontrar elvalor de enmedio del array
var mediana = 0;
    //Paso a:
            if ( lista.length % 2 == 0) {
                //Toma el 1er valor de la segunda mitada
                var valorA = listaOrdenada[(listaOrdenada.length/2)];
                //Toma el último valo de la primera mitad 
                var valorB = listaOrdenada[(listaOrdenada.length/2) - 1];;
                mediana = (valorA + valorB) / 2;
    //Paso b:
            } else {
                    mediana = listaOrdenada[
                    parseInt( listaOrdenada.length/2 ) ];
            }


// -------------------- -------------------- --------------------
/*                         Calcular MODA                       */
// -------------------- -------------------- --------------------

const listaCount = {};

lista.map (
    function (elemento) {
        if(listaCount[elemento]) {
            listaCount[elemento] = listaCount[elemento] + 1
        } else {
            listaCount[elemento] = 1
        }
    }
)

const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
)

const moda = listaArray[listaArray.length - 1];