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
/*Imprime apartir del caracter 6*/
console.log('res', res);
//5 Void
//5.a Tipado explícito
function showInfo(user) {
    console.log('User Info', user.idVF, user.usernameVF, user.firstNameVF);
}
showInfo({ idVF: 1, usernameVF: 'elRefas', firstNameVF: 'Bernardo' });
//5.b Tipado Inferido
function showFormattedInfo(user) {
    console.log('Userinfo', "\n            id: " + user.idVF + "\n            username: " + user.usernameVF + "\n            firstName: " + user.firstNameVF + "\n        ");
}
showFormattedInfo({ idVF: 1, usernameVF: 'elRefas', firstNameVF: 'Bernardo' });
//Tipo Void, como tipo de dato en una variable
var unusable;
unusable = null;
unusable = undefined;
//Tipo: Never
function handleError(code, message) {
    //Process your code here
    //Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
/*
function sumNumbers(limit: number): never {
    let sum = 0
    while(true){
        sum++
    }
}


sumNumbers(10);
*/
//6 Null
//6.a Tipado explícito    
var nullVariable;
nullVariable = null;
//6.b Tipado Implicito   
var otherVariable = null;
//7 Undefined
//7.a Tipado explícito    
var undefVariable;
//7.b Tipado Implicito   
var otherundfVariable = undefined;
/*El compilador lo infiere como 'any'*/
//7 Object
//7.a Tipado explícito   
var userOb;
userOb = {
    id: 1,
    username: 'ElRefotas',
    firstName: 'Cabrera',
    isPro: true,
};
console.log('userOB', userOb);
//Object(JS) VS object(TS)
var MyObj = {
    id: 1,
    username: 'ElRefotas',
    firstName: 'Cabrera',
    isPro: true,
};
var isInstance = MyObj instanceof Object;
console.log('isInstance', isInstance);
console.log('user.username', MyObj.username);
//8 Array
//8.a Tipado explícito 
//Con corchetes
var userArC;
userArC = ['perros', 'gatos', 'conejos'];
//8.b Tipado Implicito 
var userArC1 = ['perros', 'gatos', 'conejos'];
//Con Array <Tipo>
var pictureTitles;
pictureTitles = ['Favorites', 'Other', 'Organize'];
//Accediendo a los valores e un Array
console.log('first collect', userArC[0]);
console.log('first album', pictureTitles[0]);
//Propiedades en Array
console.log('userArc1', userArC1.length);
//Usos de funciones en Array
userArC1.push('pokemones');
userArC1.sort();
console.log('userArc1', userArC1);
//9 T
/*
nebulizar
dalce centro sanluis
comprobate de deposito
4441692180
*/ 
