"use strict";
class Vehicle {
    constructor(model, kilometers, seats, fuel, year, img) {
        this.model = model;
        this.kilometers = kilometers;
        this.seats = seats;
        this.fuel = fuel;
        this.year = year;
        this.img = img;
    }
    priceCalculate() {
        return this.kilometers * this.year;
    }
    printInfo() {
        return `<div class="col-sm-6"><div class="card">
        <img src="${this.img}" class="card-img-top" alt="image">
        <div class="card-body">
          <p class="card-text">Model : ${this.model}</p>
          <button class="btn btn-primary" id="btn">Show more detail</button>
        </div>
      </div>
      </div>`;
    }
    clickInfo() {
        return `
          <p class="card-text"><br>   Price : ${this.priceCalculate()}€</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Length : ${this.kilometers} km</li>
          <li class="list-group-item">Seats : ${this.seats}</li>
          <li class="list-group-item">Fuel : ${this.fuel}</li>
          <li class="list-group-item">Year : ${this.year}</li>
        </ul>
        `;
    }
}
let vehicle1 = new Vehicle("new", 1000, 6, "electronic", 2020, "img/car.jpg");
let vehicle2 = new Vehicle("new", 2000, 4, "electronic", 2016, "img/car2.jpg");
let vehicle3 = new Vehicle("new", 5000, 2, "gassoline", 2010, "img/car3.jpg");
let vehicle4 = new Vehicle("new", 4000, 8, "electronic", 2011, "img/car4.jpg");
let car = [vehicle1, vehicle2, vehicle3, vehicle4];
for (let vehicle of car) {
    document.getElementsByClassName("car")[0].innerHTML += vehicle.printInfo();
}
// (document.getElementsByClassName("car")[0] as HTMLElement).innerHTML += vehicle1.printInfo();
// (document.getElementsByClassName("car")[0] as HTMLElement).innerHTML += vehicle2.printInfo();
//click
function detailInfo() {
    document.getElementsByClassName("detail")[0].innerHTML += vehicle1.clickInfo();
}
let btns = document.getElementsByClassName("btn");
console.log(btns);
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        document.getElementsByClassName("card-body")[i].innerHTML += car[i].clickInfo();
    });
}
// for (let val of btns) {
//     val.addEventListener("click", function () {
//     })
// }
//child class
class Motorbikes extends Vehicle {
    constructor(model, kilometers, seats, fuel, year, img, cc) {
        super(model, kilometers, seats, fuel, year, img);
        this.cc = cc;
    }
}
class Trucks extends Vehicle {
    constructor(model, kilometers, seats, fuel, year, img, feature) {
        super(model, kilometers, seats, fuel, year, img);
        this.feature = feature;
    }
}
