//class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this.name, this.age);
    }
}

let p1 = new Person("harsh", 21);
p1.show();
let p2 = new Person("virat", 30);
p2.show();

//inheritance
//defination : inheritance is a mechanism in which one class acquires the property of another class

class Student extends Person {
    constructor(name, age, rollno) {
        super(name, age); 
        this.rollno = rollno;
    }
    display() {
        console.log(this.name, this.age, this.rollno);
    }
}

let s1 = new Student("harsh", 21, 101);
s1.display();
let s2 = new Student("virat", 30, 102);
s2.display();