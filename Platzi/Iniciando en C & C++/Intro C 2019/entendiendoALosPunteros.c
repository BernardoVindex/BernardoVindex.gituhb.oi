#include <stdio.h>

void cambio(int *a, int *b)
{
	int aux;

        
	aux = *a;:    
}

int main()
{
	int x, y;

	x = 5;
	y = 10;
	
	printf("'X' vale: %i, y 'Y' vale: %i\n\n", x,y);
	cambio (&x, &y);
	
	printf("Ahora 'X' vale: %i, y 'Y' vale: %i\n\n", x,y);
		
	return 0;
}
