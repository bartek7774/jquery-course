// // ES 5
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.sayHello = function () {
//   return "Hello " + this.firstName + " " + this.lastName;
// }

// function Student() {
//   Person.apply(this, arguments);
// }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// ES 2015
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, university) {
//     super(firstName, lastName);
//     this.university = university;
//   }
//   sayHello() {
//     return `Hello ${this.firstName} ${this.lastName}`;
//   }
//   static isStudent(obj) {
//     return obj.constructor === Student;
//   }
// }

// // Check results
// console.log(Student.prototype);
// console.log(Student.prototype.constructor === Student);

// let elie = new Student('Elie', 'Schoppik', 'Lodz');
// console.log(elie);

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    return "VROOOM!";
  }
  toString() {
    return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor() {
    super(...arguments);
    this.numWheels = 4;
  }
  toString(){
    return super.toString()+' '+this.numWheels;
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(...arguments);
    this.numWheels = 2;
  }
  toString(){
    return super.toString()+' '+this.numWheels;
  }
}

let car=new Car('Corsa','Opel',2000);
let motorcycle=new Car('Harley','Davidson',2014);
console.log(car.toString());
console.log(motorcycle.toString());

