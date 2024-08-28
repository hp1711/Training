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

