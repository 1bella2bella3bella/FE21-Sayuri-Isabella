"use strict";
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printData() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
let person1 = new Person("Sayuri", 22, "IT");
console.log(person1.printData());
class Employee extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printNewData() {
        return `${super.printData()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
    }
}
let employee1 = new Employee("Sayuri", 22, "IT", 3000, "Vienna");
console.log(employee1.printNewData());
