class Person {
    name: string;
    age: number;
    jobTitle: string;
    constructor(name: string, age: number, jobTitle: string) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;     
    }
    printData() {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`
    }
}

let person1 = new Person("Sayuri", 22, "IT");
console.log(person1.printData());


class Employee extends Person {
    salary: number;
    jobLocation: string;
    constructor(name: string, age: number, jobTitle: string,salary: number, jobLocation: string){
        super(name,age,jobTitle)
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    printNewData() {
        return `${super.printData()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`
    }
}

let employee1 = new Employee("Sayuri", 22, "IT", 3000, "Vienna");

console.log(employee1.printNewData());
