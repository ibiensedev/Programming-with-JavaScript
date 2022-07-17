// Exercise 1

for (let index = 1; index <= 10; index++) {

    if (index == 1) {
        console.log("Gold medal");
    } else if (index == 2) {
        console.log("Silver medal");
    } else if (index == 3) {
        console.log("Bronze medal");
    } else {
        console.log(index);
    }

}

/* Exercise 2. Use the completed code from the previous task, 
but convert the conditionals to a switch statement.*/

for (let index = 1; index <= 10; index++) {

    switch (index) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(index);
            break;
    }

}