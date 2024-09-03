//array methods

//1)==================concat

console.log("concat");
let fruits = ["apple", "orange", "mango", "banana"];
let fruits1 = ["grapes", "kiwi"];
let res = fruits.concat(fruits1);
console.log(res);

//2)==================length

console.log("length");
let res1 = fruits.length;
console.log(res1);

//3)==================sort

console.log("sort");
let res2 = fruits.sort();

console.log(res2);

//4)==================reverse

console.log("reverse");
let res3 = fruits.reverse();
console.log(res3);

//5)==================indexOf

console.log("indexOf");
let res4 = fruits.indexOf("mango");
console.log(res4);

//6)==================lastIndexOf

console.log("lastIndexOf");
let res5 = fruits.lastIndexOf("mango");
console.log(res5);

//7)==================array to sttring

console.log("array to string");
let res6 = fruits.toString();
console.log(res6);

//8)==================join

console.log("join");
let res7 = fruits.join(" * ");
console.log(res7);

//9)==================pop

console.log("pop");
let res8 = fruits.pop();
console.log(res8);