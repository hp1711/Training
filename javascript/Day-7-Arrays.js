//Arrays

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

console.log(cars);

const cars1 = ["Saab", "Volvo", "BMW"]; 
console.log(cars1[1]);

const cars2 = new Array("Saab", "Volvo", "BMW");


//array properties

console.log(cars1.length);
console.log(cars1.sort());

//access the last element of an array

console.log(cars1[cars1.length-1]);

//Array looping using for loop


console.log("array looping");
let fruits, text, fLen, i;
fruits = ["apple", "orange", "mango", "banana"];
fLen = fruits.length;

for(i=0; i < fLen; i++){
    console.log(fruits[i]);
}


//Array looping using forEach

console.log("array looping using forEach");
fruits.forEach(myFunction);

function myFunction(value){
    console.log(value);
}   


//Adding array elements


console.log("Adding array elements");
fruits.push("grapes");
console.log(fruits);


//typeof

let h= new Array(1,2,3,4,5);
console.log(typeof h);
console.log(Array.isArray(h));
