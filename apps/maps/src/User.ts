import { address, name } from 'faker'
import { Mappable } from './CustomMap'

export class User implements Mappable {
    location: {
        lat: number;
        lng: number;
    }
    name: string

    constructor() {
        this.name = name.findName();
        this.location = {
            lat: parseFloat(address.latitude()),
            lng: parseFloat(address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }
}
