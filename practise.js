//1. Define the Vehicle Class:
   //○ The constructor should include properties: type, make, model, year,
   //and mileage.
   //○ Use default values for mileage (e.g., 0).
//2. Add Methods:
  //○ drive(distance): Increases the vehicle’s mileage by the given
  //distance (in kilometers or miles).
  //○ getDetails(): Returns a formatted string describing the vehicle’s
  //details.
//3. Create and Use Vehicle Objects:
  //○ Instantiate at least three vehicle objects with different properties (e.g.,
  //a car, a truck, and a motorcycle).
  //○ Use the drive method to simulate trips and update mileage.
  //○ Use the getDetails method to print each vehicle’s updated

  class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
      this.type = type;
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
    }

    drive(distance) {
      this.mileage += distance;
    }

    getDetails() {
      return `Type: ${this.type}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.mileage}`;
    }
  }
  
  let car = new Vehicle("Car", "Toyota", "Corolla", 2020);
  let truck = new Vehicle("Truck", "Ford", "F-150", 2018);
  let motorcycle = new Vehicle("Motorcycle", "Honda", "CB500", 2021);

  car.drive(150);
  truck.drive(300);
  motorcycle.drive(50);

  console.log(car.getDetails());
  console.log(truck.getDetails());
  console.log(motorcycle.getDetails());