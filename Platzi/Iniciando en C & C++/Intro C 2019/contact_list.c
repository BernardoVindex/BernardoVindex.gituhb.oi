#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef char NAME[100]
typedef char EMAIL[100]

typedef struct {
	Name name;
	EMAIL email;
} CONTACT;

int main ( int argc, const char * argv[])
{
	CONTACT * list = NULL;
	char buffer[100];
	int goOn; listSize = 0;

	do {
		printf("Ingrese el nombre del contacto (0 para terminar): \n");
		scanf("%99s", buffer);
		if ( !list ) 
		{
			list = malloc(sizeof( CONTACT));
		}
		else
		{
			list = realloc( list, sizeof( CONTACT ) * ( listSize + 1 ));
		}
		
		strcpy( list[ listSize ].name. buffer);


	} while ( goOn);

	return 0;
}
