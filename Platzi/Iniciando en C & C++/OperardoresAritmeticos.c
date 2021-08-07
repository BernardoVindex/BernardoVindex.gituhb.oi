#include <stdio.h>
#include <stdlib.h>
/*
int main()
{
    int rSum;
    float rRest;
    float rDiv;
    float rMult;
    int rMod;

    rSum = 7 + 3;
    rRest = 7.1 - 3.1;
    rDiv = 7.0 / 3.0;
    rMult = 7 * 3;
    rMod = 7 % 3;

    printf ("Resutlado de la suma: %i \n", rSum);
    printf ("Resutlado de la resta: %f \n", rRest);
    printf ("Resutlado de la divici�n: %f \n", rDiv);
    printf ("Resutlado de la multiplicaci�n: %f \n", rMult);
    printf ("Resutlado del m�dulo: %i \n", rMod);

    return 0;
}
*/

/*----------------------RETO----------------------*/

int main()
{
    int radio, altura;

    printf ("Da un valor al radio: ");
    scanf ("%i", &radio);

    printf ("Da un valor a la altura: \n");
    scanf ("%i", &altura);

    int vol = (3.1616*(radio^2))*altura;

    printf ("El vol�men del cilindro es: %i", vol);

    return 0;
}
