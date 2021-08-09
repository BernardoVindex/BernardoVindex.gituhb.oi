#include <stdio.h>

int main()
{
	int * pi;
	int a = 5;
	int b = 1;

	pi = &a;
	printf("Antes \na = %d, &a = %p\n b = %d, b = %p\n pi = %p\n", a, &a, b, &b, pi);
	pi++;

	*pi = 10;

	printf("Desp. \na = %d, &a = %p\n b = %d, b = %p\n pi = %p\n", a, &a, b, &b, pi);


	return 0;
}
