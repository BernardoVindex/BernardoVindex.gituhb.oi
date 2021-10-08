"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["Landscape"] = 0] = "Landscape";
    photoOrientation[photoOrientation["Protrai"] = 1] = "Protrai";
    photoOrientation[photoOrientation["Square"] = 2] = "Square";
    photoOrientation[photoOrientation["Panorama"] = 3] = "Panorama";
})(photoOrientation || (photoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id},
                 title: ${this.orientation},
                 orientation: ${this.orientation}
        ]`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.picture = [];
    }
    addPicture(picture) {
        this.picture.push(picture);
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Selfies', photoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
// Accediento a los miembros públicos
picture.id = 100; //publico
picture.title = 'another title'; //publico
album.title = 'Personal activities';
console.log('album', album);
