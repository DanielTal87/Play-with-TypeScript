export interface Mappable {
    location: {
        lat: number,
        lng: number
    }

    markerContent(): string
}

export class CustomMap {
    private readonly _googleMap: google.maps.Map

    constructor(divId: string) {
        this._googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    get googleMap(): google.maps.Map {
        return this._googleMap;
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: mappable.location
        })

        marker.addListener('click', () => {
            const info = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            info.open(this.googleMap, marker)
        })
    }

}
