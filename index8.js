
let cars = new Map([
    ["BMW", "fast"],
    ["Lexus", "nice"],
    ["Jeep", "big"]
    ]);
    cars.forEach((value, key) => {
        console.log(`${key} - x = ${value} - y`);
    });  