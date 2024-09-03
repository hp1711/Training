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

//8)==================converting to upper & lower case

console.log("converting to upper & lower case");
let text8 = "Hello World!";
let res8 = text8.toUpperCase();
console.log(res8);

let res9 = text8.toLowerCase();
console.log(res9);

//9)==================concatenating stringg

console.log("concatenating stringg");
let text9 = "Hello";
let text10 = "World!";
let res10 = text9.concat(" ,", text10);
console.log(res10);

//10)==================trimming string

console.log("trimming string");
let text11 = "       Hello World!        ";
let res11 = text11.trim();
console.log(res11);

let text12 = "       Hello World!        ";
let res12 = text12.trimStart();
console.log(res12);

let text13 = "       Hello World!        ";
let res13 = text13.trimEnd();
console.log(res13);

//11)==================padding string

console.log("padding string");
let text14 = "5";
let res14 = text14.padStart(2, 0);
console.log(res14);

let text15 = "5";
let res15 = text15.padEnd(4, 0);
console.log(res15);


//12)==================string repeat

console.log("string repeat");
let text16 = "Hello World!";
let res16 = text16.repeat(2);
console.log(res16);


//13)==================string replace

console.log("string replace");
let text17 = "Hello World!";
let res17 = text17.replace("", "India");
console.log(res17);


//case insensitive

let text18 = "Hello World!";
let res18 = text18.replace(/hello/i, "India");
console.log(res18);

//global replace

let text19 = "hello World hello!";
let res19 = text19.replace(/hello/g, "India");
// let res19 = text19.replace(/hello/gi, "India");
console.log(res19);


//14)==================string to array

console.log("string to array");
let text20 = "Hello World!";
let res20 = text20.split("");
console.log(res20);


//15)==================string search


//search
console.log("string search");
let text21 = "Hello World!";
let res21 = text21.search("World");
console.log(res21);

//indexof

let text22 = "Hello World!";
let res22 = text22.indexOf("World");
console.log(res22);