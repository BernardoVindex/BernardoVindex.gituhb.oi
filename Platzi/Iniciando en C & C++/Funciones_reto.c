#include <stdio.h>
#include <stdlib.h>
#include <math.h>


int main()
{
    int b;
    int e;
    int r;

    printf("Digita un número: ");
    scanf(" %i", &b);

    printf("Digita un exponente: ");
    scanf(" %i", &e);

    r = pow(b,e);

    printf("El resultado es: %i", r);

    /*printf("ESTE ES TU NPUMERO: %i ", b);*/
}
