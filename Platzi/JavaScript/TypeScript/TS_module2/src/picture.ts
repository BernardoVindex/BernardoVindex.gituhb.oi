import { photoOrientation } from "./photoOrienation";
import { Item } from "./item";


export class Picture extends Item {
    constructor( id: number, 
                 title: string, 
                 private _date: string, 
                 private _orientation: photoOrientation ) {
        super(id, title);
    }

    private toString(): string {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`
    }
}