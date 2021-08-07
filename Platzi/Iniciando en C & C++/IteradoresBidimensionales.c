#include <stdio.h>
#include <stdlib.h>

/*int main ()
{
    printf("Arreglos bidimensionales e ieradores");
    int Array[4][5];
    int i;
    int j;
    for(i = 0; i < 4; i++)
    {
        for (j = 0; j < 5; j++)
        {
            Array [i][j] = ((i+j)*100 + j);
            printf("(%i, %i); %i \n", i, j, Array[i][j]);
        }

    }
    return 0;
}
*/


int main () //Con valores declarados
{
    int f, c;
    float Cal[5][6] = {{6,7,8,6,9,0},
                       {9,8,8,8,8,0},
                       {8,7,6,6,7,0},
                       {7,9,7,6,6,0},
                       {6,7,9,9,5,0}};


    for(f = 0; f < 5; f++)
    {
         for(c = 0; c < 6; c++)
        {
            if(c < 5)
            {
                Cal[f][5] += Cal[f][c];
                printf ("Calificación del proyecto %d es : %f \n", c, Cal[f][c]);
            }
            else
            {
                Cal[f][5] /= 5;
                printf ("Calificación de la materia es: %f \n\n", Cal [f][5]);
            }

        }
    }
    return 0;
}

/*
int main()
{

    printf("Array Bidimesional - Promedio de calificaciones.\n\n");
        float arrayB[5][6] = {  { 6, 7, 6, 7, 8, 0},
                            { 8, 8, 7, 9, 7, 0},
                            {10, 10, 9, 10, 8, 0},
                            { 10, 9, 9, 9, 8, 0},
                            { 8, 7, 6, 7, 8, 0} };

    int i;
    int j;
    for(i = 0; i < 5; i++)
    {
        for(j = 0; j < 6; j++)
        {
            if(j < 5)
            {
                arrayB[i][5] += arrayB[i][j];
                printf("La sumatoria de arrayB[%d][5], es: %f \n", i, arrayB[i][5]);
            }
            else
            {
                arrayB[i][j] /= 5;
                printf("\n\tEl promedio de la fila %d, es: %f\n\n", i, arrayB[i][j]);
            }
        }
    }

    return 0;
}
*/
