#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef char NAME [100]; //Se trata de alias, se escriben typedef "tipo de dato" "alias"
typedef int AGE;

struct PERSON
{	
	NAME name;
	AGE age;
};


void fillPersonData( struct PERSON * person, const char * name, int age)
{
	if ( strlen( name ) < 100) //Es como un candado ante un buffer overflow, evita que el argumento 1 (el segudno slot del array) sea mayor a 100 y empieze a sobreescribir más allá del espacio en memoria que le corresponde (el 100 asignado anteriormente)
        {
                strcpy( (*person).name, name); //Funciona igual si "(*person).name" se escribe "person->name"
        }
	(*person).age = age;//Funciona igual si "(*person).age" se escribe (persone->age
}




int main( int argc, const char * argv[])
{
	struct PERSON person;

	if ( argc < 3)
	{
		printf("Indique el nombre y edad por favor\n");

		return 1;
	}


	fillPersonData( &person, argv[1], atoi(argv[2]));

	printf("Name = %s, age = %d\n", person.name, person.age);

	return 0;
}
