"use strict";
//import { Album, photoOrientation, Picture, User } from "./photo-app";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const photoOrienation_1 = require("./photoOrienation");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, 'Vindex', 'Bernardo', true);
const album = new album_1.Album(10, 'History of my life');
const picture = new picture_1.Picture(1, 'My Self', '1995-09', photoOrienation_1.photoOrientation.Square);
//Creando relaciones entre objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('user:', user);
user.removeAlbum(album);
console.log('user:', user);
