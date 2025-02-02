class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make}  moving at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} moving at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = this.speed * 1.6;
  }
}

bmw = new Car("BMW", 120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes = new Car("Mercedes", 95);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
console.log(bmw.speedUS);
mercedes.speedUS = 80;
console.log(mercedes);
