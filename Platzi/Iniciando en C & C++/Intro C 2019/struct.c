#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main( int argc, const char * argv[])
{
	struct 
	{
		char name[100];
		int age;
	} person; //Declaramos una veriable tipo "struct" llamada "person" con nombre en caracteres y una edad en enteros

	if ( argc < 3)
	{
		printf("Indique el nombre y edad por favor\n");

		return 1;
	}

	if ( strlen(argv[1] ) < 100) //Es como un candado ante un buffer overflow, evita que el argumento 1 (el segudno slot del array) sea mayor a 100 y empieze a sobreescribir más allá del espacio en memoria que le corresponde (el 100 asignado anteriormente)
	{
		strcpy( person.name, argv[1]);
	}

	person.age = atoi( argv[2]); //atoi() es una función de stdlib que pasa los caracteres a números

	printf("Name = %s, age = %d\n", person.name, person.age);

	return 0;
}
