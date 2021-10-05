export {};

enum photoOrientation {
    Landscape,
    Protrai,
    Square,
    Panorama
}

// SuperClase
class Item {
    protected _id: number;
    protected _title: string;

    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
    }
    
    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }

    get title(){
        return this._title;
    }
    set title(title: string){
        this._title = title;
    }
}



class Picture extends Item{
    private _orientation: photoOrientation;

    public constructor(id: number,
                title: string,
                orientation: photoOrientation) {
        super(id, title);
        this._orientation = orientation;
    }
   

    get orientation(){
        return this._orientation;
    }
    set orientation(o: photoOrientation){
        this._orientation = o;
    }
    // Comportamiento
    public toString(){
        return `[id: ${this._id},
                 title: ${this._orientation},
                 orientation: ${this._orientation}]`
    }
}

class Album extends Item {
    private _picture: Picture[];

    public constructor(id: number, title: string) {
        super(id, title);
        this._id = id;
        this._title = title;
        this._picture = [];
    }

    public addPicture(picture: Picture) {
        this._picture.push(picture)
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Selfies', photoOrientation.Square);
album.addPicture(picture);
console.log('album', album)

console.log('picture.id', picture.id); //get    
picture.id = 100; //set
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);

