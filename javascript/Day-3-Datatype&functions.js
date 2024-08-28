//--------------------------Day 3--------------------------------------------

//datatypes

//1. Number

let num = 5;
console.log(num);

//2. String

let str = "Hello";
console.log(str);

//3. Boolean

let bool = true;
console.log(bool);

//4. Undefined

let und;
console.log(und);

//5. Null

let nul = null;
console.log(nul);

//6. Object

let obj = {name: "John", age: 30};
console.log(obj);

//7. Array

let arr = [1, 2, 3, 4, 5];
console.log(arr);


//typeof operator

let num1 = 5;
console.log(typeof num1);

let str1 = "Hello";
console.log(typeof str1);

let bool1 = true;
console.log(typeof bool1);

let und1;
console.log(typeof und1);

let nul1 = null;
console.log(typeof nul1);

let obj1 = {name: "John", age: 30};
console.log(typeof obj1);

let arr1 = [1, 2, 3, 4, 5];
console.log(typeof arr1);


//Function

function myFunction(p1, p2) {
    return p1 * p2;
  }

    console.log(myFunction(4, 3));

//Arrow Function

const myFunction1 = (p1, p2) => p1 * p2;

console.log(myFunction1(4, 3));

//Function with multiple parameters

function myFunction2(p1, p2) {
    return p1 * p2;
  }

console.log(myFunction2(4, 3));

//Function with default parameters

function myFunction3(p1, p2 = 3) {

    return p1 * p2;
  }

console.log(myFunction3(4));

//Function with rest parameters

function myFunction4(...p) {

    return p[0] * p[1];
  }

console.log(myFunction4(4, 3));

//Function with spread operator

function myFunction5(p1, p2) {
    
        return p1 * p2;
    }

let arr2 = [4, 3];

console.log(myFunction5(...arr2));

//Function with callback

function myDisplayer(some) {
    console.log(some);
  }

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

myCalculator(5, 5, myDisplayer);


//Ojects

let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person1.firstName + " is " + person1.age + " years old.");

//Accessing Object Properties

let person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person2.firstName);

//Accessing Object Methods

let person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person3.fullName());


