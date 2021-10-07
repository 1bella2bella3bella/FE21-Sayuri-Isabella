//basic1
class Person {
    name:string;
    age: number;
    jobTitle: string;
    constructor (name:string, age:number, job:string){
        this.name =name;
        this.age=age;
        this.jobTitle=job;
    }
printMsg(){
    return `Hello there! My name is ${this.name}, I am ${this.age} years old and I am a(n) ${this.jobTitle}.`
}
}

let person1 = new Person ("Isabella", 23, "IT-Person");

console.log(person1.printMsg());

//basic2

class Employee extends Person {
    salary:number;
    jobLocation: string;
    constructor (name:string, age:number, job:string, salary:number, loc:string){
    super (name, age, job);
    this.salary=salary;
    this.jobLocation=loc;
    }
    printNewMsg (){
        return `${super.printMsg()} I get ${this.salary}€ every month, and I work in ${this.jobLocation}.`
    }
}

let person2 = new Employee ("Ronald", 38, "Creative Director", 2500, "Vienna");

console.log(person2.printNewMsg());