//--------------------------Day 1--------------------------------------------
//First js program
console.log("Hello World");

//displaying date with use of inbuilt function
console.log(Date());

document.write("Hello World");

//alert box
//alert("Hello, welcome to the world of javascript");

//variables

let x, y, z;    
x = 5;          
y = 6;         
z = x + y;

let person = "John Doe";

console.log(z);

//re- declaring variable
var carName = "Volvo";
var carName="hi";
console.log(carName);


//string concatenation

let h= "John" + " " + "Doe"; 
console.log(h);

let r = "5" + 2.7 + 3;
console.log(r);
console.log("hwllo")

let u = 2 + 3 + "5";
console.log(u);

let $myMoney = 5;
console.log($myMoney);

let _lastName = "Johnson";
console.log(_lastName);



//--------------------------Day 2--------------------------------------------

//operators

//--1-- The Assignment Operator = assigns values

//--2-- The Arithmetic Operators + - * / perform arithmetic on numbers

//--3-- The Comparison Operator > compares values

//--4-- The Logical Operator && and || specify AND and OR logic

//--5-- The Increment Operator ++ increments a value by 1

//--6-- The Decrement Operator -- decrements a value by 1

//--7-- The Modulus Operator % divides values and returns the remainder

//1----------------------Assignment Operator------------------------

let a = 5;
let b = 6;
let c = a + b;
console.log(c);

c+=b;
console.log(c);

c-=b;
console.log(c);

c*=b;
console.log(c);

c/=b;
console.log(c);

//bitwise operators

let m = 5;//101
let n = 6;//110

let o = m & n;
console.log(o);//100---AND

let p = m | n;
console.log(p);//111---OR

let q = m ^ n;
console.log(q);//011---XOR




//2----------------------Arithmetic Operators------------------------

let d = 5;
let e = 6;
let f = d + e;
console.log(f);

let g = d - e;
console.log(g);

let xx = d * e;
console.log(xx);

let yy = d / e;
console.log(yy);

let zz = d % e;
console.log(zz);

let aa = d ** e;
console.log(aa);

//3----------------------Comparison Operator------------------------

let bb = 5;
let cc = 6;

console.log(bb == cc);

console.log(bb != cc);

console.log(bb > cc);

console.log(bb < cc);

console.log(bb >= cc);

console.log(bb <= cc);

//4----------------------Logical Operator------------------------

let dd = 5;
let ee = 6;

console.log(dd > 3 && dd < 10);

console.log(dd > 3 || dd < 4);

console.log(!(dd > 3 && dd < 10));

//5----------------------Increment Operator------------------------

let ff = 5;
ff++;

console.log(ff);

//6----------------------Decrement Operator------------------------

let gg = 5;
gg--;

console.log(gg);

//7----------------------Modulus Operator------------------------

let hh = 5;
let ii = 6;

console.log(hh % ii);


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


