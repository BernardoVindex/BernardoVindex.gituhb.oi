#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("Arcivhos! Crear un archivo \n");

    FILE *archivo;

    archivo = fopen("prueva3.dat","w");

    if(archivo != NULL)
    {
        printf("El archivo se ha creado exitosamente. Comprueba en la carpeata que hasido creado\n");
        fclose(archivo);
    }else
    {
        printf("El archivo no se ha creado");
    }

    return 0;
}
