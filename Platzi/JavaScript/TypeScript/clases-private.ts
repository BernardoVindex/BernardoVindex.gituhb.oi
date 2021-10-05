export {};

enum photoOrientation {
    Landscape,
    Protrai,
    Square,
    Panorama
}

class Picture {
    // Atributos
    private id: number;
    private title: string;
    private orientation: photoOrientation;

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
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Selfies', photoOrientation.Square)
album.addPicture(picture);

console.log('album', album);
