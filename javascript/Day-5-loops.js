//For loop

console.log("For loop");
for(var i=0;i<5;i++){
    console.log(i);
}


//For in loop

console.log("For in loop");
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

for (let x in person) {
    console.log(x);
  } 

//While loop

console.log("While loop");

let r = 0;
while (r < 5) {
  console.log(r);
  r++;
}
    
//Do while loop

console.log("Do while loop");

let j = 0;
do {
  console.log(j);
  j++;
}
while (j < 5);

//For of loop       

console.log("For of loop");

let cars = ['BMW', 'Volvo', 'Mini'];
for (let x of cars) {
  console.log(x);
}


