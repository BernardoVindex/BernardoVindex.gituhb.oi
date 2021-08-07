#include <stdio.h>
#include <stdlib.h>

/*
Ejercicio de clase
int main()
{
    printf ("Arreglos e iteradores \n");

    int integrerArray[11];
    int i;

    for(i = 0; i <= 11; i++)
    {
        integrerArray[i] = i*i;
        printf("Valor (%i): %i \n", i, integrerArray[i]);
    }

    return 0;
}
*/

int main()
{
    printf("Encontrar el numero mas grande de un arreglo.\n\n");

    int tam;
    printf("Tamaño del arreglo: ");
    scanf("%d", &tam);

    int numeros[tam];
    int mayor;

    printf("Ingresa los valores:\n");

    for(int i = 0; i < tam; i++)
    {
        printf("Valor[%d]: ", i);
        scanf("%d", &numeros[i]);
    }

    mayor = numeros[0];
    for(int i = 1; i < tam; i++)
        if(numeros[i] > numeros[i-1])
            mayor = numeros[i];

    printf("\nEl numero mayor es: %d\n\n", mayor);

    return 0;
}
}