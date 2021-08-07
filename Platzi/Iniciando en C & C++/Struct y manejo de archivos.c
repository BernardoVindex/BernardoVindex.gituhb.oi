#include <stdio.h>
#include <stdlib.h>

struct personalData
{
    char name[20];
    char lastName[20];
    int age;
};

int main()
{
    printf("Estructuras de Datos! \n");

    struct personalData person;

    FILE *archivo;
    archivo = fopen("DatosPersonales001.dat","wb");

    if(archivo != NULL)
    {
    fread(&person,sizeof(person), 1, archivo);

    printf("Impimir los datos \n");
    printf("Nombre: %s \n", person.name);
    printf("Apellido: %s \n", person.lastName);
    printf("Edad: %i \n", person.age);

    fclose(archivo);
    }
    else
    {
        printf("No se ha podido crear el archivo");
    }

    return 0;
}


/*
        fflush(stdin);         //Que disque pa limpiar el buffer

    printf("Leer los datos: \n");
    printf("Ingresar nombre: \n");
    gets(person.name);

    printf("Ingresar apellido: \n");
    gets(person.lastName);

    printf("Ingresar edad: \n");
    scanf("%i", &person.age);

    printf("Imprimir datos: \n");
    printf("%s \n", person.name);
    printf("%s \n", person.lastName);
    printf("%i \n", person.age);

    fwrite(&person, sizeof(person), 1, archivo);
*/
