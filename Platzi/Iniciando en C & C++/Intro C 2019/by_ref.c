#include <stdio.h>

void duplicar( int * a ) //Con *a es un puntero (dirección de memoria)
{
	*a *= 2; //Traduciendo: "Lo que esté en la dirección *a, multiplícalo por 2"
}


int main()
{
	int a = 5;
	printf("Antes de duplicar a = %d\n", a);
	duplicar(&a);  //Indicamos la dirección de memoria en a
        printf("Despues de duplicar a = %d\n", a);

	return 0;
}
