#include <stdio.h>
#include <stdlib.h>

char publicText[] = ("Texto en una variable global");

void Check()
{
    printf("\n Imprimir desde la funcion: check");

    printf("Variables global: \n");
    printf("%s", publicText);

    printf("Variable local: \n");
//    printf("%s", privateText);

}

int main ()
{
    printf("Variables globales!\n");

    char privateText[] = ("Texto en una variable local \n");

    printf("Variables global: \n");
    printf("%s", publicText);

    printf("Variables local: \n");
    printf("%s", privateText);

    Check();

    return 0;
}
