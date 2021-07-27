#include <stdio.h>

//Variable Declarations
//extern int permite declarar variables que se usarán en distintos archivos

extern int a, b, c;

float f, g, h;

int main()
{
//Variable Initialitation    
    a = 1;
    b = 34;
    c = a +b;
    
    printf("Value of sum is %d", c);   //%d imprime el valor de la variable despues de la ","
    return 0;
}

//For extern keyword https://www.geeksforgeeks.org/understanding-extern-keyword-in-c/
/*%d Se utiliza para representar una parte de la memoria como un número entero.

Placeholders usados en C

%c - a character

%s - a string

%d - a decimal integer

%o - an octal integer

%x - a hexadecimal integer

%p - an address (pointer)

%f - for floats

%e - a floating point number in scientific notation

%E - a floating point number in scientific notation

%% - The % symbol

%07i justificado a la derecha, 7 digitos de largo sin relleno
%.71 largo mínimo de 7 dígitos, justifiacado a la derecha rellena con ceross

%8.2f tamaño toal de 8 dígios, con dos decimales

%n cadena terminada en null

%5s primeros 5 cracteres o delimitador
%5s primeros 5 cracteres sin tener en cunta el delimitador
https://static.platzi.com/media/user_upload/Screenshot_2020-08-02%20Sintaxis%20de%20especificación%20de%20formato%20Funciones%20printf%20y%20wprintf-83b4fee0-d278-46e1-9c70-3e42c906b5fd.jpg

*/

/*
Para aquellos a los que no le haya quedado claro qué es una variable y cual
es la sintaxis correcta para declararla en C, les comparto esta breve 
explicación:

Una variable es un espacio de memoria reservado (en RAM), cuyo tamaño 
depende del tipo de dato que se quiere almacenar. A dicho espacio reservado
podemos asignarle un nombre, para referirnos mucho más fácil a la dirección
 de memoria donde se encuentra, o al valor que almacena. Los datos 
 contenidos en una variable, al estar cargados en la memoria RAM, 
 desaparecerán una vez el computador se apague.

Debido a que C es un lenguaje fuertemente tipado, es necesario declarar el 
tipo de datos que va a contener una variable desde el momento de la 
declaración. La sintaxis (forma correcta de escribir en un lenguaje) para 
declarar una variable en C es la siguiente

char letra;
donde char representa el tipo de datos (caracter), letra es el nombre que
le asignamos a la variable, y el ; representa el final de la instrucción.
En este ejemplo, hemos reservado 1 byte para almacenar nuestros datos,
sin embargo, no se le ha asignado ningún valor aún. Si quisiéramos 
declarar una variable e inmediatamente guardar un dato en ella podríamos
hacerlo usando la sintaxis:

char letra='a';
a será el valor que almacena la variable, y se encuentra entre comillas 
sencillas para indicar que es un caracter.

Finalmente cabe aclarar que podemos asignar cualquier nombre a una 
variable, teniendo en cuenta estas restricciones:

No debe empezar por un número
No debe ser igual a una palabra reservada del sistema, es decir, palabras 
definidas previamente por el lenguaje para ejecutar acciones especiales
Deben ser significativos, es decir, que describan claramente lo que están 
almacenando. Ej. Para almacenar la cantidad de estudiantes de un curso, 
podriamos llamar a la variable alumnos
Espero a alguien le sirva.
*/