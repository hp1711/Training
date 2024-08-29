//========================Day-5==============================


//comparison if and else

var a = 10;
var b = 20;

if (a > b) {
    console.log("a is greater than b");
}
else {
    console.log("b is greater than a");
}

//comparison if and else if

var a = 10;
var b = 20;

if (a > b) {
    console.log("a is greater than b");
}

else if (a < b) {
    console.log("a is less than b");
}

else {
    console.log("a is equal to b");
}

//if else odd even program

var a = 10;

if (a % 2 == 0) {
    console.log("a is even");
}
else {
    console.log("a is odd");
}


//switch case

var day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
        break;
}

