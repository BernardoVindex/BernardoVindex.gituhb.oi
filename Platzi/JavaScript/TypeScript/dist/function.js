// Crear una fotografía
/*
function createPicture(title, date, size) {
    //title
}
*/
// Usar TS, definimos tipos para parámetros
function createPicture(title, date, size) {
    //Se crea la fotografía
    console.log('create Picture using', title, date, size);
}
createPicture('My Frist Pict', '2021-10-10', '500x500');
// Parametros opcionales en funciones
function createPictures(title, date, size) {
    //Se crea la fotografía
    console.log('create Picture using', title, date, size);
}
createPictures('My Frist Pict', '2021-10-10', '500x500');
createPictures('For FPS', '2021-09');
createPictures('Trigun');
// Flat Array Function
let createPic = (title, date, size) => {
    /*    return {
            title: title,
            date: date,
            size: size
        };              */
    return {
        title,
        date,
        size
    };
};
const picture = createPic('My Picts', '2021-06-09', '1000x1000');
console.log('picture:', picture);
// Tipo de retrono con TypeScript
function handleError(code, message) {
    //Procesamiento del código, mensaje
    if (message == 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has occurred';
    }
}
;
try {
    let result = handleError(200, 'OK');
    console.log('result:', result);
    result = handleError(400, 'error'); //Never
    console.log('result:', result);
}
catch (_a) {
}
