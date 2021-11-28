import { address, company } from 'faker'
import { Mappable } from './CustomMap'

export class Company implements Mappable {
    name: string
    catchPhrase: string
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = company.companyName()
        this.catchPhrase = company.catchPhrase()
        this.location = {
            lat: parseFloat(address.longitude()),
            lng: parseFloat(address.longitude())
        }
    }

    markerContent(): string {
        return `
        <div>
            <h3>Company Name: ${this.name}</h3>
            <p>Catchphrase: ${this.catchPhrase}</p>
        </div>
        `
    }
}
