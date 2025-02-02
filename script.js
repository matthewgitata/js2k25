const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make}  moving at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} moving at ${this.speed} km/h`);
};

bmw = new Car("BMW", 120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes = new Car("Mercedes", 95);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
