"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcion par mostrar Fotografia
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["Landscape"] = 0] = "Landscape";
    photoOrientation[photoOrientation["Portrait"] = 1] = "Portrait";
    photoOrientation[photoOrientation["Square"] = 2] = "Square";
    photoOrientation[photoOrientation["Panorama"] = 3] = "Panorama";
})(photoOrientation || (photoOrientation = {}));
function showPicture(picture) {
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
    title: 'Test1',
    date: '2021-89',
    orientation: photoOrientation.Portrait,
    //extra: 'test'
});
;
function generatePicutre(config) {
    const pic = { title: 'Default_title', date: '2100-13' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicutre({});
console.log('picture', picture);
picture = generatePicutre({ title: 'travel pic' });
console.log('picture', picture);
picture = generatePicutre({ title: 'travel pic', date: '2020-09' });
console.log('picture', picture);
let user;
user = {
    id: 10,
    username: 'Vindex',
    isPro: true
};
console.log('user', user);
user.username = 'El Refotas';
console.log('user', user);
// user.id =  '11' //ERROR
