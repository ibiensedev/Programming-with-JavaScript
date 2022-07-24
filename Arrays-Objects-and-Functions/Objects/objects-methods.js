var car = {};

car.mileage = 91283;
car.color = "blue";

car.turnTheKey = function () {
    console.log("The engine is running");
}
car.lightsOn = function () {
    console.log("The lights are on");
}

console.log(car);
car.turnTheKey();
car.lightsOn();

console.log(typeof car);
console.log(typeof car.mileage);
console.log(typeof car.color);