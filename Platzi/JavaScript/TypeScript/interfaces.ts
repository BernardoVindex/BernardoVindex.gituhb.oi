export {}
// Funcion par mostrar Fotografia
 enum photoOrientation {
     Landscape,
     Portrait,
     Square,
     Panorama
 }

interface Picture {
    title: string,
    date: string, 
    orientation: photoOrientation
}


function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
                  date: ${picture.date}, 
                  orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test',
    date: '2021-09',
    orientation: photoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title:'Test1',
    date: '2021-89',
    orientation: photoOrientation.Portrait,
    //extra: 'test'
});

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: photoOrientation
};

function generatePicutre(config: PictureConfig) {
    const pic = {title: 'Default_title', date: '2100-13'};
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicutre({});
console.log('picture', picture);

picture = generatePicutre({title: 'travel pic'});
console.log('picture', picture);

picture = generatePicutre({title: 'travel pic', date: '2020-09'});
console.log('picture', picture);

// Intefaz: Usuarios
interface User {
    readonly id: number; //solo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {
    id: 10,
    username: 'Vindex',
    isPro: true
};
console.log('user', user);
user.username =  'El Refotas'
console.log('user', user);
// user.id =  '11' //ERROR

