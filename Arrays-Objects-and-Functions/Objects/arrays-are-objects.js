// push() to add new items to array

var fruits = [];

fruits.push("apple");
fruits.push("pear");

console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}

// pop() to remove the last item from array

fruits.pop();

console.log(fruits);

// take function arguments and pushes into an array

function arrayBuilder1(one, two, three) {

    var arr = [];

    arr.push(one);
    arr.push(two);
    arr.push(three);

    console.log(arr);

}

console.log("arrayBuilder1: ");
arrayBuilder1('apple', 'pear', 'plum');

function arrayBuilder2(one, two, three) {

    var arr = [];

    arr.push(one);
    arr.push(two);
    arr.push(three);

    return arr;

}
// I can save this function call to a variable
var simpleArr = arrayBuilder2('apple', 'pear', 'plum');

console.log("arrayBuilder2: ");
console.log(simpleArr);