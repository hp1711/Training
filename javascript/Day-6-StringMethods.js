//String methods

console.log("String methods");

//1)================String length

console.log("String length");
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length;
console.log(length);

//2)================Extracting String Character

console.log("Extracting String Character");
let text2 = "Hello World!";
let res = text2.charAt(0);
console.log(res);

let res1 = text2.charAt(6);

console.log(res1);

//3)================Character code

console.log("Character code");
let text3 = "Hello World!";
let res2 = text3.charCodeAt(0);
console.log(res2);

//4)================String At same As charAt

console.log("String At");
let text4 = "Hello World!";
let res3 = text4[0]; // or text4.at(0);
console.log(res3);


//5)================String slice

console.log("String slice");
let text5 = "Apple, Banana, Kiwi";
let res4 = text5.slice(7, 13);
console.log(res4);


//6)================String substring

console.log("String substring");
let text6 = "Apple, Banana, Kiwi";
let res5 = text6.substring(7, 13);
console.log(res5);

//7)================String substr

console.log("String substr");
let text7 = "Apple, Banana, Kiwi";
let res6 = text7.substr(7, 6);
console.log(res6);

let res7 = text7.substr(-4);
console.log(res7);