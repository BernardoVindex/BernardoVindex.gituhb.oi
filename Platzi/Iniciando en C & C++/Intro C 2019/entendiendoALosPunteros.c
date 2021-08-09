#include <stdio.h>

void jugar(int* n)
{
	printf("El valor del apuntador *n es: %d\n", *n);
	int y = *ny = (y + 2) / 2 + 2 - (3 * y);
	printf("El valor de y es: %d\n",y);
	
}

int main()
{
	int x = 10;
	printf("El valor de x priemro es: %d\n", x);
	jugar(&x);
	printf("El valor de x despues es: %d\n", x);
		
	return 0;
}
