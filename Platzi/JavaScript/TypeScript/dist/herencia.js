"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["Landscape"] = 0] = "Landscape";
    photoOrientation[photoOrientation["Protrai"] = 1] = "Protrai";
    photoOrientation[photoOrientation["Square"] = 2] = "Square";
    photoOrientation[photoOrientation["Panorama"] = 3] = "Panorama";
})(photoOrientation || (photoOrientation = {}));
const album = {
    id: 1,
    title: 'Meeups',
    description: 'Community arrun the world'
};
const picture = {
    id: 1,
    title: 'Family',
    orientation: photoOrientation.Landscape
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = 'Moon';
console.log('album:', album);
console.log('picture:', picture);
console.log('picture:', newPicture);
