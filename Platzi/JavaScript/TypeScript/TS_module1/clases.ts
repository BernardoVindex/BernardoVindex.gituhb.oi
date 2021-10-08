export {};

enum photoOrientation {
    Landscape,
    Protrai,
    Square,
    Panorama
}

class Picture {
    // Atributos
    public id: number;
    public title: string;
    public orientation: photoOrientation;

    public constructor(id: number,
                title: string,
                orientation: photoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    public toString(){
        return `[id: ${this.id},
                 title: ${this.orientation},
                 orientation: ${this.orientation}
        ]`
    }
}

class Album {
    public id: number;
    public title: string;
    public picture: Picture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.picture = [];
    }

    public addPicture(picture: Picture) {
        this.picture.push(picture)
    }
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Selfies', photoOrientation.Square)
album.addPicture(picture);

console.log('album', album);

// Accediento a los miembros públicos

picture.id = 100; //publico
picture.title = 'another title' //publico
album.title = 'Personal activities'
console.log('album', album);