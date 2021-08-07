#include <stdio.h>
#include <stdlib.h>

int Addition(int a, int b)
{
    int res = a + b;
    return res;
}

/*Version más corta

int Addition(int a, int b)
{
    return res = a + b;;
}

*/

int main ()
{
    printf("Funciones!\n");

    int additionRes = Addition(3,4);

    printf("Resultado es: %i", additionRes);

    return 0;
}
