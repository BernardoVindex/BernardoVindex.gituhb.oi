/**
 * Complejidad Temporal -> O( n + 3) |Se decarta el 3 porque n puede valer 10 o 1000, haciendo al 3 irrelevante | O(n)
 * Complejidad Espacial -> O( n + 1) || // O(n)
 * Espacio Auxiliar = Complejidad Espacial - Espacio de entrada
 *                    O(n) - O(1) || O(1)
 */
                                                              // Tiempo //Espacio
function linearSearch(arreglo, clave) {                                 // O(n)
    for (let indice = 0; indice < arreglo.length; indice++) { // O(n)   // O(1)
        if (arreglo[indice === clave]) {                      // O(1)   
            return indice                                     // O(1)
        }
    }
    return -1                                                 // O(1)
}