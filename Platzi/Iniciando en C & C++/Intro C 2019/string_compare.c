#include <stdio.h>
#include <string.h>

int main()
{
	char * name = "Mauro";
	char * otherName = "Juan";

	printf("Lo nombres son %s\n", strcmp( name, otherName) == 0 ? "iguales" : "distitnos"); 
// El "?" es una comparación en linea, el ":" es un "si no"

	return 0;
}
