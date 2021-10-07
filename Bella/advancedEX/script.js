"use strict";
class Vehicles {
    constructor(model, brand, color, km, fuel, year, image) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.kilometers = km;
        this.fuelType = fuel;
        this.yearOfProd = year;
        this.image = image;
    }
    finalPrice() {
        return this.kilometers * this.yearOfProd / 1212;
    }
    startCard() {
        return `<div class="card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand} ${this.model}</h5>
          <div class="card-text">
          <p>Color: ${this.color}</p>
          <p>km: ${this.kilometers}</p>
          <p>Fuel Type: ${this.fuelType}</p>
          <p>Production year: ${this.yearOfProd}</p>
          `;
    }
    endCard() {
        return `</div>
        <h5>${this.finalPrice()}€</h5>
        <a href="#" class="btn btn-primary">Show Price</a>
      </div>
    </div>`;
    }
    wholeCard() {
        return this.startCard() + this.endCard();
    }
}
class Motorbikes extends Vehicles {
    constructor(model, brand, color, km, fuel, year, image, numSeats, numWheels) {
        super(model, brand, color, km, fuel, year, image);
        this.numberOfSeats = numSeats;
        this.numberOfWheels = numWheels;
    }
    wholeCardMotor() {
        return `${super.startCard()}
        <p>Seats: ${this.numberOfSeats}</p>
        <p>Wheels: ${this.numberOfWheels}</p>
        ${super.endCard()}`;
    }
}
class Trucks extends Vehicles {
    constructor(model, brand, color, km, fuel, year, image, loadCap) {
        super(model, brand, color, km, fuel, year, image);
        this.loadCapacity = loadCap;
    }
    wholeCardTrucky() {
        return `${super.startCard()}
            <p>Load Capacity: ${this.loadCapacity} tons</p>
            ${super.endCard()}`;
    }
}
let vehicle1 = new Vehicles("Golf", "Volkswagen", "red", 88000, "Gasoline", 2015, "https://as1.ftcdn.net/v2/jpg/03/70/52/30/1000_F_370523023_DVTRFZ29AMy3kbKZXKDhGSRXlplicK0g.jpg");
let vehicle2 = new Motorbikes("Motorrad", "Harley-Davidson", "black, orange, silver", 269088, "Gasoline", 2012, "https://as2.ftcdn.net/v2/jpg/04/16/55/25/1000_F_416552536_fCNa9NkESPT2mb0EdH3BwpZbB6zqpipK.jpg", 2, 2);
let vehicle3 = new Trucks("Truck", "Man", "blue", 330098, "Gasoline", 2016, "https://t4.ftcdn.net/jpg/03/01/54/51/240_F_301545141_g9T8AIt0TKRqpzpWttxyblCODcY8OPHu.jpg", 20);
let vehicle4 = new Vehicles("Semi-Oldie", "Porsche", "red", 34000, "Gasoline", 1977, "https://as2.ftcdn.net/v2/jpg/03/03/59/65/1000_F_303596508_R4K4orHsI7kbvmDBoutFtVVfGxFtmwH3.jpg");
document.getElementById("box").innerHTML += vehicle1.wholeCard();
document.getElementById("box").innerHTML += vehicle2.wholeCardMotor();
document.getElementById("box").innerHTML += vehicle3.wholeCardTrucky();
document.getElementById("box").innerHTML += vehicle4.wholeCard();
/* var bla = (document.getElementsByClassName("box") as HTMLElement);
 bla.innerHTML+=vehicle1.wholeCard();
 */
