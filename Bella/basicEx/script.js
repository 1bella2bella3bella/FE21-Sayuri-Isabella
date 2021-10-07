"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//basic1
var Person = /** @class */ (function () {
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.jobTitle = job;
    }
    Person.prototype.printMsg = function () {
        return "Hello there! My name is " + this.name + ", I am " + this.age + " years old and I am a(n) " + this.jobTitle + ".";
    };
    return Person;
}());
var person1 = new Person("Isabella", 23, "IT-Person");
console.log(person1.printMsg());
//basic2
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, job, salary, loc) {
        var _this = _super.call(this, name, age, job) || this;
        _this.salary = salary;
        _this.jobLocation = loc;
        return _this;
    }
    Employee.prototype.printNewMsg = function () {
        return _super.prototype.printMsg.call(this) + " I get " + this.salary + "\u20AC every month, and I work in " + this.jobLocation + ".";
    };
    return Employee;
}(Person));
var person2 = new Employee("Ronald", 38, "Creative Director", 2500, "Vienna");
console.log(person2.printNewMsg());
