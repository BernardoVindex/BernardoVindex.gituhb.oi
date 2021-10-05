// Crear una fotografía
/*
function createPicture(title, date, size) {
    //title
}
*/

type SquareSize = '100x100' | '500x500' | '1000x1000';

// Usar TS, definimos tipos para parámetros
function createPicture(title: string, date: string, size: SquareSize) {
    //Se crea la fotografía
    console.log('create Picture using', title, date, size);
}

createPicture('My Frist Pict', '2021-10-10', '500x500');


// Parametros opcionales en funciones
function createPictures(title?: string, date?: string, size?: SquareSize) {
    //Se crea la fotografía
    console.log('create Picture using', title, date, size);
}

createPictures('My Frist Pict', '2021-10-10', '500x500');
createPictures('For FPS', '2021-09');
createPictures('Trigun');

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
/*    return {
        title: title,
        date: date,
        size: size
    };              */
    return {
        title,
        date,
        size
    }
};

const picture = createPic('My Picts', '2021-06-09', '1000x1000')
console.log('picture:', picture);

    // Tipo de retrono con TypeScript

    function handleError(code: number, message: string): never | string {
        //Procesamiento del código, mensaje
        if (message == 'error') {
            throw new Error(`${message}. Code error: ${code}`);
        } else {
            return 'An error has occurred'
        }
    };

  

    try {
        let result = handleError(200, 'OK');
        console.log('result:', result);
        result = handleError(400, 'error') //Never
        console.log('result:', result);
    } catch {

    }