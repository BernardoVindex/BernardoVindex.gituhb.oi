"Es de humanos errar" //Strin literal 

const int costoHotDog = 100;
const int costoHotDogU = 100u; //Sufijo que dindeca que es unsigned
const int costoHotDogL = 100l; //Sufijo que dindeca que es long
const float totalBill = 100.05
const char newLine = '\n'

A pesar de que el concepto de constante es bastante explícito para 
nosotros los humanos, en la clase no queda muy claro como C interpreta 
una constante

Como su nombre lo indica, una constante es un valor que no va a cambiar 
durante toda la ejecución del programa. Al igual que una variable, una 
constante reserva una cantidad de memoria (que dependen del tipo de dato 
que almacena), y le asigna un valor, el cual será considerado en adelante 
como una variable de sólo lectura. Es decir, solo podremos acceder a esa 
posición de memoria a recuperar el valor que contiene , pero no tenemos la
posibilidad de modificar dicho valor

De hecho, si intentamos reasignar un valor definido previamente en una 
constante, el compilador nos arrojará un error.

Existen diferentes tipos de constantes:

constantes literales
 Ejemplo de constantes literales enteras
123
1024L // entero long
4352U // entero unsigned
0xFF3A // hexadecimal

 Ejemplos de constantes literales reales
82.347
2.5E4
5.432E-3

 Ejemplos de constantes literales caracter

'A'
'b'
'c'

 Ejemplos de constantes literales de cadena

"Esta es una cadena"

constantes definidas
#define PI 3.141516
#define MAX 48

constantes enumeradas
enum Color favorit_color { Red, Orage, Yellow, Green, Blue, Purple}
constantes declaradas
const int MONTH = 12;
const char CAR = '@';
const char STRING[] = "Programming in C" 

Para aquellos que quedaron con la duda de qué es una directiva de 
preprocesador, les comparto la explicación:

Una directiva de preprocesador es una instrucción que recibe el compilador
y le indica que hay ciertas acciones a realizar antes de iniciar a 
compilar el programa. Se insertan al principio de cada programa, y se 
identifican por estar precedidas por el caracter # (Hastag)

Una de las más conocidas es la directiva include, que le dice al 
compilador que debe incluir una librearía (código previamente escrito, 
con alguna funcionalidad extra que puede ser usada de manera general en 
muchos programas) y hacerla parte del código actual.

Otras directivas de prerpocesador son #ifdef, #ifndef, #else, #elif y 
#endif las cuales sirven como condiciones para evitar errores, al definir 
varias veces las mismas variables.

Espero les sirva!