export {};

enum photoOrientation {
    Landscape,
    Protrai,
    Square,
    Panorama
}

// Get y Set



class Picture {
    // Atributos
    private _id: number;
    private _title: string;
    private _orientation: photoOrientation;

    public constructor(id: number,
                title: string,
                orientation: photoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
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
                 orientation: ${this._orientation}
        ]`
    }
}

class Album {
    #id: number;
    #title: string;
    #picture: Picture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#picture = [];
    }

    public addPicture(picture: Picture) {
        this.#picture.push(picture)
    }

    get id(){
        return this.#id;
    }
    set id(id: number){
        this.#id = id;
    }

    get title(){
        return this.#title;
    }
    set title(title: string){
        this.#title = title;
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Selfies', photoOrientation.Square);

console.log('picture', picture); //get    
picture.id = 100; //set
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album', album);