const add = (a: number, b: number): number => {
    return a + b
}

function divide(a: number, b: number): number {
    return a / b
}

const moltiply = function (a: number, b: number): number {
    return a * b
}

// never expect the function to return anything
const throwError = (message: string): never => {
    throw new Error(message)
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date, weather)
}

logWeather(todaysWeather)