#include <stdio.h> //Standar input out put se llaman pre procsesors command

//Ejemplos des variables
int i, j, k;
unsigned int minutosEstacionados = 30 ;

char y = 'y'
unsigned char ddailyWorkedHours = 0;


int main() //funcion pincipal 1#
{
    //Fist hello world in -C lenguage
    printf("Hello Student");
    //Indica que se debe terminar el programa
    return 0; 
}
Basic Types:
    Aritmeticos
         (A) Valores enteros 
                    char /*1 Byte-128 to 127*/

                    int /*De 2 Bytes (-32,768 to 32,767)
                           4 Bytes (-2,147,483,648 to 2,147,248,647)*/

                    short /*De 2 Bytes (-32,768 to 32,767)
                            4 Bytes (-2,147,483,648 to 2,147,248,647)*/   

                    long  /*8 Bytes -9223372036854775808 to 9223372036854775807*/                 
                      
                         
                    unsigned char /*1 Byte 0 t 255*/

                    unsigned int /*2 Bytes (0 to 65,535) 
                                   4 Bytes (0 to 4,294,967,295)*/

                    unsigned short /*2 Bytes (0 to 65,535) 
                                     4 Bytes (0 to 4,294,967,295)*/  

                    unsigned long /*8 Bytes 18446744073709551615*/
                                     
              
          (B) De punto Flotante float 
                     
                    float //4 Bytes 1.2^-38 to 3.4^38 6 decimal places
                    
                    double //8 Bytes 2.3^-308 to 1.7^308 15 decimal places

                    long double //10 Bytes 3.4^-4932 to 1.1^4932 19 decimal places

        void : Especifica que no hay valor disponible
               1-Funcion retorna un tipo de datos void (no retrona valor)
                 
                 void function()

               2-Función tiene argumentos tipo void

                 int rand(void)

               3-Puntero o apuntador que va a la direccion de la memoria de un
                 objeto, pero no le importa el tipo de objeto que tenga


                 
  