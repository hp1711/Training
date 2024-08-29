
//Ojects

console.log("==================Objects=========================");
let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person1.firstName + " is " + person1.age + " years old.");

//Accessing Object Properties

console.log("=================Accessing Object Properties===================");
let person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person2.firstName);
console.log(person2['firstName'])

//Accessing Object Methods

console.log("================Accessing Object Methods using function==================");
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

//adding new properties

console.log("===============Adding new properties==============");
let person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

person4.nationality = "English";

console.log(person4.nationality)

//delete properties

console.log("================Deleting properties==============");
let person5 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

delete person5.age;

console.log(person5.age)

//Nested Objects

console.log("================Nested Objects==================");

let person6 = {
    name: "John",
    age: 50,
    cars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  };

console.log(person6.cars.car2);

