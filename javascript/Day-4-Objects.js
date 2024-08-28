
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

