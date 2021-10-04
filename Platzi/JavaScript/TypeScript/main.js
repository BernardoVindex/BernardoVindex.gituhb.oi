//Típos de Dato TS
//1. Number
//1.a Tipado Explicito
var phone;
phone = 4771400882;
//1.b Tipado Inferido
var phoneNumber = 4771508693;
//1.1 Hexadecimales
var hex = 0xf00d;
/*La notacion '0xf' indica, podemos usar números del 0 al 9 y 'a' a la 'f' */
//1.2 Binarios
var binary = 10;
/*La notación '0b' se usa para identificar números binarios (0-1)*/
//1.3 Valor Octal
var octal = 484;
/*La notación '0o' se usa para identificar números octales (0-7)*/
//2 Boolean
//2.a Tipado Explicito
var isPro;
isPro = true;
//2.b Tipado Inferido
var isUserPro = false;
//3 String
var userName;
userName = "elRefas";
//3.1 Template String
// Uso de back-trick '`'
var userInfo;
userInfo = "\n        User Info: \n        usarName: " + userName + "\n        firstName: " + (userName + ' Vindex') + "\n        phone: " + phone + "   \n        isPro: " + isPro + "\n    ";
console.log('userInfo', userInfo);
//4 Any
//4.a Tipo Explícito
var idUser;
idUser = 1; //Number
idUser = '1'; //String
//4.a Tipo Inferido
var otherId;
otherId = 2;
otherId = '2';
var surprise = 'Hello TypeScript';
var res = surprise.substring(6);
console.log('res', res);
