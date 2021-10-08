//import { Album, photoOrientation, Picture, User } from "./photo-app";

import { Album } from "./album";
import { photoOrientation } from "./photoOrienation";
import { Picture } from "./picture";
import { User } from "./user";


const user = new User(1, 'Vindex', 'Bernardo', true);
const album = new Album(10, 'History of my life');
const picture = new Picture(1, 'My Self', '1995-09', photoOrientation.Square)

//Creando relaciones entre objetos

user.addAlbum(album);
album.addPicture(picture);

console.log('user:', user);

user.removeAlbum(album);
console.log('user:' , user);