#include <stdio.h>

int main( int argc, char * argv[])
{
	int i;
	for ( i = 0; i < argc; i++)
	{
		printf("Argumento %d = %s\n", i, argv[i]);
	}
	

	return 0;
}

/**Parametros dentro de la funcion main(): 
 
La funcion main puede tener argumentos o parametros uno de ellos es:

 argc: Es de tipo int es decir entero y contiene el numero de argumentos que se pasan al ejecutar el programa

argv: Su variable es de tipo array, contiene array de punteros y caracteres

IMPORTANTE La variable arc, como ninimo valdra 1, ya que el nombre del programa se toma como argumento, que se almacena con argv[0], que es el primer elemento del array, cada elemento del array apuntara a un argumento.

–> Pueden ser llamados o declararse luego de la funcion, pero lo importante es que tiene que formar parte del parametro de la funcion, como por ejemplo:

<main(argc, argv)
{
int argv;
char * argv[];
}
-----------
main (int argc, char * argv [])
{
}>*/
