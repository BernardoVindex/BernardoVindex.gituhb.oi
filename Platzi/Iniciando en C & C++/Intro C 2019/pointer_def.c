#include <stdio.h>

int main()
{
	int number = 109;
	int * pointerToNumber = &number;
	
	printf("%p, %d\n", pointerToNumber, *pointerToNumber);

	return 0;
}
