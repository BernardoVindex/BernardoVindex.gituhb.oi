export {}

enum photoOrientation {
    Landscape,
    Protrai,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    description: string
}

interface Picture extends Entity {
    orientation: photoOrientation
}

const album: Album = {
    id: 1,
    title: 'Meeups' ,
    description: 'Community arrun the world'
}

const picture: Picture = {
    id: 1,
    title: 'Family',
    orientation: photoOrientation.Landscape
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon'

console.log('album:', album);
console.log('picture:', picture);
console.log('picture:', newPicture);