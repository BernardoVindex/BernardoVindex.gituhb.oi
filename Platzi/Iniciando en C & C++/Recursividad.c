#include <stdio.h>
#include <stdlib.h>

int factorial(int n)
{
    printf("\n Entra a la fucion factorial, n vale %i, ", n);

    if(n > 1)
    {
        printf("La funcion se llamara a si misma otra vez \n ");
        return n * factorial(n-1);
    }
    else
    {
        printf("n es igual a 1, termina la recursividad \n");
        return 1;
    }
}

int main()
{
    printf("Recrusividad !\n");

    int result = factorial(5);
    printf("\n El resultado es: %i", result);

    return 0;
}
