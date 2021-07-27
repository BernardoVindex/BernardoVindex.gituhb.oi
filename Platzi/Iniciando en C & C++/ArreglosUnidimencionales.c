#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf ("Arreglos e iteradores \n");

    int integrerArray[11];
    int i;

    for(i = 0; i <= 11; i++)
    {
        integrerArray[i] = i*i;
        printf("Valor (%i): %i \n", integrerArray[i]);
    }

    return 0;
}
