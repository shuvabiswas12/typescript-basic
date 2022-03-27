export class Bird {

    // by using export before the class keyword this class turns into a modules.

    constructor(private _color?: string, private _name?: string, private _age?: number, private _weight?: number) { }

    get color() {
        return this._color;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get weight() {
        return this._weight;
    }

    set color(color: string) {
        this._color = color;
    }

    set name(name: string) {
        this._name = name;
    }

    set age(age: number) {
        this._age = age;
    }

    set weight(weight: number) {
        this._weight = weight;
    }
}