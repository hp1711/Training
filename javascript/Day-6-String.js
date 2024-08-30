//Java script Strings


//double and single quotes
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes 

//quotation syntec
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

//Template string (ES 6)

let text = `He's often called "Johnny"`; 

//String length

console.log("String length");
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length;
console.log(length);


//Escape characters

console.log("Escape characters");
let text2 = "We are the so-called \"Vikings\" from the north.";
console.log(text2);

let text3 = 'Hello \b World!';
console.log(text3);

let text4 = 'Hello \n World!';
console.log(text4);

let text5 = 'Hello \r World!';
console.log(text5);

let text6 = 'Hello \t World!';
console.log(text6);

let text7 = 'Hello \v World!';
console.log(text7);

let text8 = 'Hello \\ World!';
console.log(text8);



//String as object

console.log("String as object");

let x = "harsh";
let y = new String("harsh");

console.log(typeof x);
console.log(typeof y);
//== equal
//=== not equal

console.log(x==y);
console.log(x===y);
