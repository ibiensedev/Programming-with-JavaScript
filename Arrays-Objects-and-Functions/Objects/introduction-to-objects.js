// Decalaration
var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}

// Dot notation
assistantManager.nextAchievement = "get promoted";

console.log(assistantManager.nextAchievement);

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log("The table has " + table.legs
    + " legs. Its color is " + table.color
    + ". Its price is " + table.priceUSD + " $.");

// Brackets notation
var arrOfKeys = ['speed', 'altitude', 'color'];

var drone = {
    speed: 100,
    altitude: 200,
    color: "red",
}

for (let i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);

}