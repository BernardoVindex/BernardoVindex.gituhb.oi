#include <stdio.h>

int main()
{
	int array[5]; //Esta variable tendra 5 posiciones para 5 num. enteros
	int i;

	for ( i = 0; i < 5; i ++)
	{
		array[i] = i * 2; //Le decimos que multiplíque el número que representa la posición por 2
	}

	for ( i = 0; i < 5; i++)
	{
		printf("array[%d] = %d\n", i, array[i]);
	}

	return 0;
}
