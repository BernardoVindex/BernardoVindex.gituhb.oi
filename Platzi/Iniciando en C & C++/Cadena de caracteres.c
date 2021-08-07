#include <stdio.h>
#include <stdlib.h>
/*
int main ()
{
    printf ("Cadena de caracteres \n");

    char nameC[50];

    int size;

    printf("Ingresar el nombre con gets: \n");

    gets(nameC);

    printf("El nombre es; ");
    puts(nameC);

    size = strlen(nameC);

    printf("\n El tamaño de la cadena es: %i \n", size);

    return 0;
}
*/

int main()
{
    printf("Cadena de Caracteres \n");

    char Cadena[50];
    int size;
    int i;

    printf("Ingresa una cadena de caracteres \n");
    gets(Cadena);

    size = strlen(Cadena);

    printf("La cadena al revez es: \n");
     for(i = size; i>=0; i--)
     {
        printf(" %c ", Cadena[i]);
     }



    return 0;
}
