import { Optional } from "@angular/core";

export class Animal {
    id: number;
    name: string;
    price: number;
    image: string;

    constructor(@Optional() id: number, name: string, price: number, image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
