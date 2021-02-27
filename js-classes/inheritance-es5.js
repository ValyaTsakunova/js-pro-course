function Car (name, model, year, color, maxSpeed, fuelCapacity, feulConsumption) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = !fuelCapacity ? 60 : fuelCapacity;
    this.feulConsumption = !feulConsumption ? 10 : feulConsumption;
}

Car.prototype.getFullName = function(){
  return `${this.name} ${this.model}`;
  };
Car.prototype.getAge = this.getAge = function(){
  return 2021 - this.year;
  };
Car.prototype.changeColor = function(color){
  if(color === this.color){
    return `Your car has already been painted ${this.color} color`;
  }else{
    this.color = color
    return`Your car was repainted with ${this.color} color`;
  }
};
Car.prototype.calculateWay = function(kilometers, fuel){
  let myFuelConsumption = kilometers * this.feulConsumption / 100;
  // console.log(myFuelConsumption);
  if(fuel < 10){
    return `You need refuel your car. Average travel time: ${kilometers / this.maxSpeed} hours`;
  }else{
    if(myFuelConsumption > fuel){
      return `You will need to refuel your car on the way (${myFuelConsumption - fuel} liters). Average travel time: ${kilometers / this.maxSpeed} hours `
    }
  }
}

function BMW (){
  Car.apply(this, arguments);
  this.gearbox = 'automatic';
  this.climate = 'climate control';
}
BMW.prototype = Object.create(Car.prototype);
BMW.prototype.constructor = BMW;
BMW.prototype._super = Car;

BMW.prototype.changeTires = function(season){
  if(season === 'winter'){
    return `You need change tires for winter for your BMW ${this.model} `
  }else{
    return `You needn't change tires for your BMW ${this.model}`
  }
}

function Lexus(){
  Car.apply(this, arguments);
  this.seats = 'seat heating';
}
Lexus.prototype = Object.create(Car.prototype);
Lexus.prototype.constructor = Lexus;
Lexus.prototype._super = Car;

Lexus.prototype.showMileage = function(mileage){
  return `Your Lexus ${this.model} has mileage ${mileage} kilometers`
}

function Audi(){
  Car.apply(this, arguments);
  this.lightingDevices = 'fog lights';
}
Audi.prototype = Object.create(Car.prototype);
Audi.prototype.constructor = Audi;
Audi.prototype._super = Car;


Audi.prototype.showMaxSpeed = function(){
  return `Maximum speed of your Audi ${this.model} is ${this.maxSpeed} km/h`;
}



const myCar = new BMW('BMW','X6', 2016, 'black', 70, 80,  12);
const carOfAnn = new Lexus('Lexus','NX', 2011, 'white', 70);
const carOfJohn = new Audi('Audi','A6', 2005, 'blue', 90);


console.log(myCar);
console.log(myCar.getFullName());
console.log(carOfAnn);
console.log(carOfAnn.changeColor('green'));
console.log(carOfAnn.showMileage(20030));
console.log(carOfJohn);
console.log(carOfJohn.showMaxSpeed());

