class Vehicle {
    constructor(private _color: string) {
        this._color = _color;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    protected honk(): void {
        console.log('Beep!!!')
    }
}

class Car extends Vehicle {
    constructor(public _wheels: number, color: string) {
        super(color);
    }

    get wheels(): number {
        return this._wheels;
    }

    set wheels(value: number) {
        this._wheels = value;
    }

    startDrive(): void {
        this.drvie()
        this.honk()
    }

    private drvie() {
        console.log('Vrommm!!!')
    }
}

const vehicle = new Vehicle('Silver')
console.log(`The vehicle color is ${vehicle.color}`)


const car = new Car(4, 'Dark red')
console.log(`The car cnpm install -g npm olor is ${car.color}`)
console.log(`The car num of wheels is ${car.wheels}`)
car.startDrive()
