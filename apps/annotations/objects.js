var profile = {
    name1: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age, name1 = profile.name1;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log(age, name1, lat, lng);
