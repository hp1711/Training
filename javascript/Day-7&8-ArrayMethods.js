//array methods

//1)==================concat

console.log("concat");
let fruits = ["apple", "orange", "mango", "banana"];
let fruits1 = ["grapes", "kiwi"];
let res = fruits.concat(fruits1);
console.log(res);

//2)==================length

console.log("length");
// let res1 = fruits.length;
// console.log(res1);

//3)==================sort

console.log("sort");
// let res2 = fruits.sort();

// console.log(res2);

//4)==================reverse

console.log("reverse");
// let res3 = fruits.reverse();
// console.log(res3);

//5)==================indexOf

console.log("indexOf");
// let res4 = fruits.indexOf("mango");
// console.log(res4);

//6)==================lastIndexOf

console.log("lastIndexOf");
// let res5 = fruits.lastIndexOf("mango");
// console.log(res5);

//7)==================array to sttring

console.log("array to string");
// let res6 = fruits.toString();
// console.log(res6);

//8)==================join

console.log("join");
// let res7 = fruits.join(" * ");
// console.log(res7);

//9)==================pop

console.log("pop");
// let res8 = fruits.pop();
// console.log(res8);

//10)==================push

console.log("push");
// let res9 = fruits.push("hello");
// console.log(res9);

//11)==================shift

console.log("shift");
// let res10 = fruits.shift();
// console.log(res10);

//12)==================unshift

console.log("unshift");
// let res11 = fruits.unshift("hello");
// console.log(res11);
// console.log(fruits);

//13)==================splice

console.log("splice");
console.log(fruits);
let res12 = fruits.splice(2, 1, "mango");
console.log(res12);
console.log(fruits);

//14)==================slice

console.log("slice");
let res13 = fruits.slice(1, 3);
console.log(res13);



