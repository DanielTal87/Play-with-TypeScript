var add = function (a, b) {
    return a + b;
};
function divide(a, b) {
    return a / b;
}
var moltiply = function (a, b) {
    return a * b;
};
// never expect the function to return anything
var throwError = function (message) {
    throw new Error(message);
};
var todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date, weather);
};
logWeather(todaysWeather);
