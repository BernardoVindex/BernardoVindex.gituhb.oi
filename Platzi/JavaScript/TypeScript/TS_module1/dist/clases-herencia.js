"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["Landscape"] = 0] = "Landscape";
    photoOrientation[photoOrientation["Protrai"] = 1] = "Protrai";
    photoOrientation[photoOrientation["Square"] = 2] = "Square";
    photoOrientation[photoOrientation["Panorama"] = 3] = "Panorama";
})(photoOrientation || (photoOrientation = {}));
// SuperClase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    //set id(id: number){
    //    this._id = id;
    //}
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    // Comportamiento
    toString() {
        return `[id: ${this._id},
                 title: ${this._orientation},
                 orientation: ${this._orientation}]`;
    }
}
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this._picture = [];
    }
    addPicture(picture) {
        this._picture.push(picture);
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Selfies', photoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
console.log('picture.id', picture.id); //get    
//picture.id = 100; //set DA ERROR POR EL READONLY
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);
//const item = new Item(1, 'Test title') DA ERROR POR ABSTRACT
//console.log('item', item);
