#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

/*                  Ejercicio de impreci�n de datos en consola
int main()
{
    int integerA = 1;
    float floatA = 1.1;
    char letterA = 'A';
    double doubleA = 1.2;
    //bool boolean = false;

    printf("El valor de nuestro entero A es: %i \n", integerA);

    printf("El valor de nuestro flotante A es: %f \n", floatA);

    printf("El valor de nuestro doble A es: %f \n", doubleA);

    printf("El valor de caracter doble A es: %c \n", letterA);
return 0;
}
*/
//El caracter "&" es un apuntador, determinar� en d�nde se guardara la informaci�n que es est� guardando

/*                  Ejercicio de asignaci�n de datos desde hardware
int main()
{
    int integerA;
    float floatA;
    char letterA;

    printf ("Ingresa el valor del entero A; ");

    scanf ("%i", &integerA);

    printf ("Ingresa el valor del flotante A; ");

    scanf ("%f", &floatA);

    printf ("Ingresa el valor de la Letra A; ");

    scanf (" %c", &letterA);

    printf ("El entero A es : %i", integerA);
    printf ("El flotante a es : %f", floatA);
    printf ("La letra A es : %c", letterA);

    return 0;
}
*/

/*-----------------------------Reto-----------------------------*/

int main()
{
    int X, Y, Z;

    printf ("Dale un valor a X: ");
    scanf ("%i", &X);

    printf ("Dale un valor a Y: ");
    scanf ("%i", &Y);

    Z = X;
    X = Y;
    Y = Z;

    printf ("El valor intercambiado de X es: %i \n", X);
    printf ("El valor intercambiado de Y es: %i", Y);

   return 0;
}
