//Típos de Dato TS
//1. Number
//1.a Tipado Explicito
let phone;
phone = 4771400882;
//1.b Tipado Inferido
let phoneNumber = 4771508693;
//1.1 Hexadecimales
let hex = 0xf00d;
/*La notacion '0xf' indica, podemos usar números del 0 al 9 y 'a' a la 'f' */
//1.2 Binarios
let binary = 0b1010;
/*La notación '0b' se usa para identificar números binarios (0-1)*/
//1.3 Valor Octal
let octal = 0o744;
/*La notación '0o' se usa para identificar números octales (0-7)*/
//2 Boolean
//2.a Tipado Explicito
let isPro;
isPro = true;
//2.b Tipado Inferido
let isUserPro = false;
//3 String
let userName;
userName = "elRefas";
//3.1 Template String
// Uso de back-trick '`'
let userInfo;
userInfo = `
        User Info: 
        usarName: ${userName}
        firstName: ${userName + ' Vindex'}
        phone: ${phone}   
        isPro: ${isPro}
    `;
console.log('userInfo', userInfo);
//4 Any
//4.a Tipo Explícito
let idUser;
idUser = 1; //Number
idUser = '1'; //String
//4.a Tipo Inferido
let otherId;
otherId = 2;
otherId = '2';
let surprise = 'Hello TypeScript';
const res = surprise.substring(6);
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
    console.log('Userinfo', `
            id: ${user.idVF}
            username: ${user.usernameVF}
            firstName: ${user.firstNameVF}
        `);
}
showFormattedInfo({ idVF: 1, usernameVF: 'elRefas', firstNameVF: 'Bernardo' });
//Tipo Void, como tipo de dato en una variable
let unusable;
unusable = null;
unusable = undefined;
//Tipo: Never
function handleError(code, message) {
    //Process your code here
    //Generate a message
    throw new Error(`${message}. Code: ${code}`);
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
let nullVariable;
nullVariable = null;
//6.b Tipado Implicito   
let otherVariable = null;
//7 Undefined
//7.a Tipado explícito    
let undefVariable;
//7.b Tipado Implicito   
let otherundfVariable = undefined;
/*El compilador lo infiere como 'any'*/
//7 Object
//7.a Tipado explícito   
let userOb;
userOb = {
    id: 1,
    username: 'ElRefotas',
    firstName: 'Cabrera',
    isPro: true,
};
console.log('userOB', userOb);
//Object(JS) VS object(TS)
let MyObj = {
    id: 1,
    username: 'ElRefotas',
    firstName: 'Cabrera',
    isPro: true,
};
const isInstance = MyObj instanceof Object;
console.log('isInstance', isInstance);
console.log('user.username', MyObj.username);
//8 Array
//8.a Tipado explícito 
//Con corchetes
let userArC;
userArC = ['perros', 'gatos', 'conejos'];
//8.b Tipado Implicito 
let userArC1 = ['perros', 'gatos', 'conejos'];
//Con Array <Tipo>
let pictureTitles;
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
//9 Tupla
//
let userT;
userT = [1, 'Maldamba'];
console.log('userT', userT);
console.log('ID:', userT[0]);
console.log('username:', userT[1]);
console.log('username.length:', userT[1].length);
//Tuplas cn varios valores
// id, user, isPro
let userInfoTupla;
userInfoTupla = [2, 'Skye', true];
console.log('userInfoTupla', userInfoTupla);
//Arreglo de Tuplas
let array = [];
array.push([1, 'Phone']);
array.push([2, 'TV']);
array.push([3, 'Laptop']);
console.log('array', array);
//Uso de funciones Array TV -> TV Smart
array[1][1] = array[1][1].concat(' Smart');
console.log('array', array);
//Enum
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["Landscape"] = 0] = "Landscape";
    photoOrientation[photoOrientation["Portrait"] = 1] = "Portrait";
    photoOrientation[photoOrientation["Square"] = 2] = "Square";
    photoOrientation[photoOrientation["Panorama"] = 3] = "Panorama";
})(photoOrientation || (photoOrientation = {}));
const landscpe = photoOrientation.Landscape;
console.log('landscape', landscpe);
console.log('landscape', photoOrientation[landscpe]);
var pictureOrientation;
(function (pictureOrientation) {
    pictureOrientation[pictureOrientation["Landscape"] = 10] = "Landscape";
    pictureOrientation[pictureOrientation["Portrait"] = 11] = "Portrait";
    pictureOrientation[pictureOrientation["Square"] = 12] = "Square";
    pictureOrientation[pictureOrientation["Panorama"] = 13] = "Panorama";
})(pictureOrientation || (pictureOrientation = {}));
console.log('portrait', pictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log('country', country);
let idUserUnion;
idUserUnion = 10;
idUserUnion = '10';
//Buscar username dade un ID
function getUsernameById(id) {
    return 'Kalifa';
}
getUsernameById(20);
getUsernameById('20');
//let smallPicture: SqareSize = '200x200' //ERROR
let smallPicture = '100x100';
let mediumPicture = '500x500';
//Aserciones de tipo
// Sintaxys: <tipo> //Angle Bracket
let userNameAB;
userNameAB = 'Furia myw';
// tenemos una cadena, TS confía en mi!
let messageAB = userNameAB.length > 5 ?
    `Welcome ${userNameAB}` :
    `Username is too short`;
console.log('messageAB', messageAB);
let userNameWithId = "Cassie    15";
//Cómo obtener el userName?
userNameAB = userNameWithId.substring(0, 10);
console.log('Only Username', userNameAB);
// Sintaxys: "as"
messageAB = userNameAB.length > 5 ?
    `Welcome ${userNameAB}` :
    `Username is too short`;
let helloUser;
helloUser = 'hello Wfu';
userNameAB = helloUser.substring(6);
console.log('userName', userNameAB);
