#include <stdio.h>
#include <stdlib.h>

//Cómo entrar a un arreglo bidimencional
/*int main()
{
printf("Arreglos Bidimencionales \n");

int bidimnionalArray [4][4];

bidimnionalArray[0][0] = 11;
bidimnionalArray[0][1] = 12;
bidimnionalArray[0][2] = 13;
bidimnionalArray[0][3] = 14;

bidimnionalArray[1][0] = 29;
bidimnionalArray[1][1] = 28;
bidimnionalArray[1][2] = 27;
bidimnionalArray[1][3] = 26;

bidimnionalArray[2][0] = 36;
bidimnionalArray[2][1] = 35;
bidimnionalArray[2][2] = 34;
bidimnionalArray[2][3] = 33;

bidimnionalArray[3][0] = 45;
bidimnionalArray[3][1] = 46;
bidimnionalArray[3][2] = 47;
bidimnionalArray[3][3] = 48;

printf("Valor en (0,1): %i \n", bidimnionalArray [0][0]);
printf("Valor en (0,1): %i \n", bidimnionalArray [0][1]);
printf("Valor en (0,1): %i \n", bidimnionalArray [0][2]);
printf("Valor en (0,1): %i \n", bidimnionalArray [0][3]);

return 0;
}
*/
/*Reto
int main()
{
printf("Arreglos Bidimencionales \n");

int collect[3][4];

collect [0][0] = 0 ;
collect [0][1] = 1 ;
collect [0][2] = 4 ;
collect [0][3] = -1;

collect [1][0] = 1;
collect [1][1] = 2;
collect [1][2] = 3;
collect [1][3] = 4;

collect [2][0] = 10;
collect [2][1] = 5;
collect [2][2] = 8;
collect [2][3] = 3;

printf ("Suma de la primera fila: %i \n", collect [0][0] + collect[0][1] + collect[0][2] + collect[0][3]);
printf ("Suma de la segunda fila: %i \n", collect [1][0] + collect[1][1] + collect[1][2] + collect[1][3]);
printf ("Suma de la tercera fila: %i \n", collect [2][0] + collect[2][1] + collect[2][2] + collect[2][3]);


return 0;
}
*/

int main()
{
    int collect [3][4] = {{0,1,4,-1},{1,2,3,4},{10,5,8,3}};

    printf ("Suma de la primera fila: %i \n", collect [0][0] + collect[0][1] + collect[0][2] + collect[0][3]);
    printf ("Suma de la segunda fila: %i \n", collect [1][0] + collect[1][1] + collect[1][2] + collect[1][3]);
    printf ("Suma de la tercera fila: %i \n", collect [2][0] + collect[2][1] + collect[2][2] + collect[2][3]);

    return 0;
}
/*
int main()
{
    int tabla [3][4] = {{1, 2, -3, 4}, {1, 2, 3, 4}, {5, 4, 8, 9}};

    for (int x = 0; x < 3; x++)
    {
        int suma = 0;
        for(int y = 0; y < 4; y++)
        {
            suma += tabla[x][y];
        }
        printf("Suma fila %i: %i \n", x + 1, suma);
    }

    return 0;
}
*/

